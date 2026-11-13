



interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement>)=> void;
  style: React.CSSProperties & { [key:string] : string | number };
  title?:string;
  name?:string;
  children?:React.ReactNode;
}

function LayoutBox({onClick,children,  ...restProps}:Props) {

  
  return (
    <div className="box" onClick={onClick} {...restProps}>
      {children}
    </div>
  )
}
export default LayoutBox