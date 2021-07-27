import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

import sty from "./ItemGallery.module.css";
import { classNames } from "@plasmicapp/react-web";
import { exampleCmsData, exampleProductData } from "./ItemGalleryExampleData";

const productQuery = `
query Products($first: Int!, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
  products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
    edges {
      node {
        ...ProductFragment
      }
    }
  }
}

fragment ProductFragment on Product {
  availableForSale
  collections(first: 5) {
    edges {
      node {
        handle
      }
    }
  }
  createdAt
  description
  descriptionHtml
  handle
  id
  images(first: 5) {
    edges {
      node {
        id
        transformedSrc
        width
        height
      }
    }
  }
  metafield(key: "app_key", namespace: "affiliates") {
    description
  }
  metafields(first: 5) {
    edges {
      node {
        key
        description
        value
        valueType
      }
    }
  }
  onlineStoreUrl
  options {
    name
    values
  }
  priceRange {
    maxVariantPrice {
      amount
    }
    minVariantPrice {
      amount
    }
  }
  productType
  publishedAt
  seo {
    title
    description
  }
  title
  updatedAt
  variants(first: 5) {
    edges {
      node {
        availableForSale
        currentlyNotInStock
        id
        image {
          id
          transformedSrc
          width
          height
        }
        priceV2 {
          amount
        }
        requiresShipping
        sku
        title
        unitPrice {
          amount
        }
      }
    }
  }
}
    `;

interface ItemGalleryProps {
  scroller?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function ItemGallery({
  scroller = false,
  children,
  className,
}: ItemGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  useEffect(() => {
    scrollerRef.current!.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [left]);
  const cardWidth = 200,
    gap = 10;
  function slide(n: number) {
    setLeft(left + n * (cardWidth + gap));
  }

  return (
    <div className={`${sty.Gallery} ${className}`}>
      {scroller && (
        <button className={sty.ScrollBtn} onClick={() => slide(-1)}>
          ‹
        </button>
      )}
      <div
        className={classNames({
          [sty.Items]: true,
          [sty.Items__Scrolling]: scroller,
        })}
        ref={scrollerRef}
      >
        {children}
      </div>
      {scroller && (
        <button className={sty.ScrollBtn} onClick={() => slide(1)}>
          ›
        </button>
      )}
    </div>
  );
}

interface ProductGalleryProps {
  count?: number;
  category?: string;
  scroller?: boolean;
  className?: string;
}
export function ProductGallery({
  category,
  count,
  ...rest
}: ProductGalleryProps) {
  const [data, setData] = useState<typeof exampleProductData | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://graphql.myshopify.com/api/2021-04/graphql.json",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-shopify-storefront-access-token":
              "ecdc7f91ed0970e733268535c828fbbe",
          },
          referrer: "https://shopify.dev/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            query: productQuery,

            variables: { first: 10 },
          }),
          method: "POST",
          mode: "cors",
          credentials: "omit",
        }
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);

  return (
    <ItemGallery {...rest}>
      {data?.data.products.edges.map((productEdge) => {
        const product = productEdge.node;
        const image = product.images.edges[0].node;
        if (category && category !== product.productType) {
          return null;
        }
        return (
          <div key={product.id} className={sty.Item}>
            <img
              alt={product.title}
              src={image.transformedSrc}
              width={image.width}
              height={image.height}
              loading={"lazy"}
              className={sty.Thumb}
            />
            <div className={sty.Title}>{product.title}</div>
            <div className={sty.Price}>
              ${product.priceRange.maxVariantPrice.amount}
            </div>
          </div>
        );
      })}
    </ItemGallery>
  );
}

interface CmsGalleryProps {
  count?: number;
  scroller?: boolean;
  className?: string;
}

export function CmsGallery({ count, ...rest }: CmsGalleryProps) {
  const [data, setData] = useState<typeof exampleCmsData | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/fbr4i5aajb0w/entries?content_type=7leLzv8hW06amGmke86y8G",
        {
          headers: {
            authorization:
              "Bearer 8c6d9bb62a89a05e4f88af2784a0a3f8bcacc7b401084d50f577dfc5f6df0c61",
            "x-contentful-user-agent": "contentful.js/3.5.0",
          },
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);
  return (
    <ItemGallery {...rest}>
      {data?.items[1].fields.images.slice(0, count).map((item) => {
        const entry = data.includes.Entry.find(
          (i) => i.sys.id === item.sys.id
        )! as typeof data.includes.Entry[0];
        const photo = entry.fields.photo;
        const asset = data.includes.Asset.find(
          (i) => i.sys.id === photo.sys.id
        )!;
        return (
          <div
            key={item.sys.id}
            className={sty.Item}
            style={{ height: "180px" }}
          >
            <img
              src={(asset.fields as any).file.url + "?w=300"}
              loading={"lazy"}
              className={sty.Thumb}
            />
            <div className={sty.Caption}>{entry.fields.title}</div>
          </div>
        );
      })}
    </ItemGallery>
  );
}
