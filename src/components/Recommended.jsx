// body {
//   margin: 0;
//   padding: 0;
//   color: black;
//   font-size: 144px;
//   font-weight: bold;
// }

import styled from "styled-components";

const Marquee = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  max-height: 75px;
  overflow-x: hidden;
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const Track = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 12s linear infinite;
`;

const Recommended = () => {
  return (
    <div className="h-[75px] max-w-screen border-y-2 border-y-black">
      <div className="flex max-h-[75px]">
        <div className="ml-[80px] my-auto w-[480px]">
          <h2 className="text-sm">Recommended by</h2>
        </div>

        <Marquee>
          <Track>
            <div className="text-2xl py-5">
              &nbsp;Infinite Marquee with long sentence Infinite Marquee with
              long sentence Infinite Marquee with long sentence Infinite Marquee
              with long sentence
            </div>
          </Track>
        </Marquee>
      </div>
    </div>
  );
};

export default Recommended;
