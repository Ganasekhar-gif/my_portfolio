declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    activeClass?: string;
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    containerId?: string;
    className?: string;
    children?: React.ReactNode;
  }

  export const Link: React.FC<LinkProps>;
  export { Link as ScrollLink };
}
