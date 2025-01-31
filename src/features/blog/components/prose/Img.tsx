import Image, { ImageProps } from "next/future/image";
/**
 * This relies on the recma-next-static-images plugin in `next.config.js`, since static images break next/image
 * @see https://github.com/vercel/next.js/discussions/19065#discussioncomment-2341463
 */
const Img = (props: ImageProps) => {
  const { children, alt, src, title, ...restProps } = props;
  if (typeof src !== "string") {
    return (
      //@ts-ignore
      <Image {...restProps} alt={alt ?? title ?? ""} title={title ?? alt ?? ""} {...src} loading="eager">
        {children}
      </Image>
    )  
  }
  return (
    <Image  {...restProps} alt={alt ?? ""} title={title ?? ""} src={src} loading="eager">
      {children}
    </Image>
  )
}

export default Img
