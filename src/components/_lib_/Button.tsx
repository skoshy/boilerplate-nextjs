export const Button = ({ href, className, ...props }) => {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag className="text-white bg-brand-500 border-0 py-2 px-2 focus:outline-none hover:bg-brand-400 hover:shadow-inner rounded text-lg cursor-pointer transition duration-150 ease-in-out text-center inline-block" href={href} {...props} />
  )
};
