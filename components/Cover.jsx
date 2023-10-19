import Image from 'next/image'

export default function Cover() {
    return (
        <Image
          src="/banner.png"
          width={500}
          height={500}
          alt="Lofi Girl banner"
        />
    )
  }
  