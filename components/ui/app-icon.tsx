import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const AppIcon = ({src, alt}: Props) => {
  return (
    <div className="rounded-md border shadow-md object-cover">
      <Image src={src} alt={alt} width={40} height={40} objectFit="contain" />
    </div>
  );
};

export default AppIcon;
