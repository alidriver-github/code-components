// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aPZu6epBt5EaEYRgMF1d6z
// Component: 3oILK2v_-pyvd
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Description from "../../Description"; // plasmic-import: l6RtOq3VZBTR1/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_code_component_examples.module.css"; // plasmic-import: aPZu6epBt5EaEYRgMF1d6z/projectcss
import * as sty from "./PlasmicHomeHeader.module.css"; // plasmic-import: 3oILK2v_-pyvd/css

import PlasmicLogoIcon from "./icons/PlasmicIcon__PlasmicLogo"; // plasmic-import: bD0dbNOKNGywZ/icon

export type PlasmicHomeHeader__VariantMembers = {};

export type PlasmicHomeHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeHeader__VariantsArgs;
export const PlasmicHomeHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeHeader__ArgsType = {
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomeHeader__ArgsType;
export const PlasmicHomeHeader__ArgProps = new Array<ArgPropType>("title");

export type PlasmicHomeHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  description?: p.Flex<typeof Description>;
  box?: p.Flex<"div">;
};

export interface DefaultHomeHeaderProps {
  title?: React.ReactNode;
  className?: string;
}

function PlasmicHomeHeader__RenderFunc(props: {
  variants: PlasmicHomeHeader__VariantsArgs;
  args: PlasmicHomeHeader__ArgsType;
  overrides: PlasmicHomeHeader__OverridesType;
  dataFetches?: PlasmicHomeHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        href={"/" as const}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Code components",
          value: args.title,
          className: classNames(sty.slotTitle)
        })}
      </p.PlasmicLink>

      <Description
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames("__wab_instance", sty.description)}
        description={
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box
            )}
          >
            {"Examples of how to bring real components to Plasmic"}
          </div>
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "description", "box"],
  link: ["link"],
  description: ["description", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  description: typeof Description;
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeHeader__VariantsArgs;
    args?: PlasmicHomeHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomeHeader__Fetches;
  } & Omit<PlasmicHomeHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeHeader__ArgProps,
      internalVariantPropNames: PlasmicHomeHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomeHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeHeader";
  } else {
    func.displayName = `PlasmicHomeHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeHeader = Object.assign(
  // Top-level PlasmicHomeHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    description: makeNodeComponent("description"),
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicHomeHeader
    internalVariantProps: PlasmicHomeHeader__VariantProps,
    internalArgProps: PlasmicHomeHeader__ArgProps
  }
);

export default PlasmicHomeHeader;
/* prettier-ignore-end */
