import styled from "styled-components";
import Image from "next/image";

export default function FourOhFour() {
  return (
    <Root className="grid place-items-center">
      <div>
        <Image src="/images/404.svg" width="1074.392" height="584.231" />
      </div>
    </Root>
  );
}

const Root = styled.div`
  height: calc(100vh - 184px);
`;
