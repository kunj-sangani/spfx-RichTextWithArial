import * as React from "react";
import { useState } from 'react';
import { IRichTextProps } from "./IRichTextProps";
import { RichText } from "../../../RichText";
import styles from "./RichText.module.scss";


export default class RichTextArial extends React.Component<IRichTextProps,{}> {    
    public render(): React.ReactElement<IRichTextProps> {
        return (<div>
            <RichText value={this.props.myRichText}
                onChange={(text) => this.props.changeRichText(text) }
            />
        </div>);
    }
}