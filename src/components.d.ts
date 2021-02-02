/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CompanyHeader {
    }
    interface GenericTable {
        "columnHeadings": Array<string> | string;
        "tableData": Array<object> | string;
        "title": string;
    }
}
declare global {
    interface HTMLCompanyHeaderElement extends Components.CompanyHeader, HTMLStencilElement {
    }
    var HTMLCompanyHeaderElement: {
        prototype: HTMLCompanyHeaderElement;
        new (): HTMLCompanyHeaderElement;
    };
    interface HTMLGenericTableElement extends Components.GenericTable, HTMLStencilElement {
    }
    var HTMLGenericTableElement: {
        prototype: HTMLGenericTableElement;
        new (): HTMLGenericTableElement;
    };
    interface HTMLElementTagNameMap {
        "company-header": HTMLCompanyHeaderElement;
        "generic-table": HTMLGenericTableElement;
    }
}
declare namespace LocalJSX {
    interface CompanyHeader {
    }
    interface GenericTable {
        "columnHeadings": Array<string> | string;
        "tableData": Array<object> | string;
        "title": string;
    }
    interface IntrinsicElements {
        "company-header": CompanyHeader;
        "generic-table": GenericTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "company-header": LocalJSX.CompanyHeader & JSXBase.HTMLAttributes<HTMLCompanyHeaderElement>;
            "generic-table": LocalJSX.GenericTable & JSXBase.HTMLAttributes<HTMLGenericTableElement>;
        }
    }
}
