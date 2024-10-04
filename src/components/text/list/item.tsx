interface ItemProps {
  children: React.ReactNode;
}

export default function Item({ children }: ItemProps) {
  return <span>{children}</span>;
}
