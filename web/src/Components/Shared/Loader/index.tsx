import React, { FunctionComponent } from "react";
import { LoaderType } from "../../../types";
import { Oval, ThreeDots, InfinitySpin } from "react-loader-spinner";

interface LoaderProps {
  type: string;
}

export const Loader: FunctionComponent<LoaderProps> = ({ type }) => {
  return (
    <>
      <div className={"container justify-content-center"}>
        <div className={"small-box mx-auto centerContent"}>
          {type === LoaderType.Oval && (
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
              wrapperClass="centerContent"
            />
          )}
          {type === LoaderType.InfinitySpin && (
            <InfinitySpin width="200" color="#4fa94d" />
          )}
          {type === LoaderType.ThreeDots && (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                justifyContent: "center",
                alignItems: "center",
                minWidth: `${window.innerWidth / 120}px`,
                minHeight: `${window.innerHeight / 120}px`,
              }}
              visible={true}
            />
          )}
        </div>
      </div>
    </>
  );
};
