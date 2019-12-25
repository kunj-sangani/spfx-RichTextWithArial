import * as React from "react";
import { useState } from 'react';
import { IRichTextProps } from "./IRichTextProps";
import { RichText } from "../../../RichText";
import styles from "./RichText.module.scss";

interface IRichTextState{
    myRichText:string;
}

export default class RichTextArial extends React.Component<IRichTextProps, IRichTextState> {
    constructor(props: IRichTextProps,state:IRichTextState) {
        super(props);
        this.state = {
            myRichText: ""
        };
    }
    public changemyRichText(text) {
        this.setState({
            myRichText: ""
        });
        return text;
    }
    public render(): React.ReactElement<IRichTextProps> {
        return (<div>
            <RichText value={this.state.myRichText}
                onChange={(text) => this.changemyRichText(text) }
            />
        </div>);
    }
}