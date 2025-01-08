import Image from 'next/image';

const ProfileImage = () => {
  return (
    <Image
      width={150}
      height={150}
      quality={100}
      priority={true}
      src="/avatar.png"
      alt="Profile Picture"
      className="rounded-full size-12 md:w-full h-auto object-cover border-2"
    />
  );
};

export default ProfileImage;
