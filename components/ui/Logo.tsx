import Link from "next/link";

const Logo = () => {
  return(
    <div className='text-[2rem] text-primary font-bold'>
      <Link href={'/'}>
        Food Shop
      </Link>

    </div>
  );
}

export default Logo
