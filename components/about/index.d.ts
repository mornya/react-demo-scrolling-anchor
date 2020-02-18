declare var _default: React.ComponentClass<Pick<import("react-router").RouteComponentProps<any, import("react-router").StaticContext, any>, never>, any> & import("react-router").WithRouterStatics<import("react-redux").ConnectedComponent<typeof About, Pick<any, string | number | symbol>>>;
export default _default;
import * as React from "react";
declare class About extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    componentDidMount(): void;
    render(): JSX.Element | null;
}
declare namespace About {
    export namespace propTypes {
        export const history: PropTypes.Requireable<object>;
        export const pageView: PropTypes.Requireable<number>;
        export const addPageView: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import * as PropTypes from "prop-types";
