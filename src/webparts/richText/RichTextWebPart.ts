import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RichTextWebPartStrings';
import RichText from './components/RichText';
import { IRichTextProps } from './components/IRichTextProps';
import RichTextArial from './components/RichText';

export interface IRichTextWebPartProps {
  description: string;
  myRichText: string;
}

export default class RichTextWebPart extends BaseClientSideWebPart<IRichTextWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRichTextProps> = React.createElement(
      RichTextArial,
      {
        description: this.properties.description,
        myRichText: this.properties.myRichText,
        changeRichText:this.changemyRichText,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  public changemyRichText = (text)=> {
    this.properties.myRichText = text;
    return text;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
