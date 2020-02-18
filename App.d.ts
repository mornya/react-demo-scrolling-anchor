export default class App extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        utilArea: boolean;
    };
    refAppWrapper: any;
    saNav: any;
    onScroll: (nextOffset: any, prevOffset: any, maxOffset: any) => void;
    onAttach: (direction: any, index: any) => void;
    onDetach: (direction: any, index: any) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
}
import * as React from "react";
