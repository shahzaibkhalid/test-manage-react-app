function Footer({ copy, src }) {
  return (
    <>
      <h1>{copy}</h1>
      <img src={src} alt='surface notebook' />
    </>
  );
}

export default Footer;
