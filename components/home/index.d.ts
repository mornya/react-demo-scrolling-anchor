declare var _default: React.ComponentClass<Pick<any, string | number | symbol> & {
    wrappedComponentRef?: ((instance: Home | null) => void) | React.RefObject<Home> | null | undefined;
}, any> & import("react-router").WithRouterStatics<typeof Home>;
export default _default;
declare class Home extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Home {
    export namespace propTypes {
        export const history: PropTypes.Requireable<object>;
    }
}
import * as React from "react";
import * as PropTypes from "prop-types";
