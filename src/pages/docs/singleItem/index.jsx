import React, { useState, useEffect, useCallback } from "react";
import Docsidebar from "../../../components/docSidebar";
import "./singleItem.scss";
import { useApiData } from "../../../context/ApiContextProvider";
import { useParams } from "react-router-dom";
import { linkTrimer } from "../../../Helpers/linkTrimmer";

const SingleItem = ({ sidebaropen }) => {
  const [state, setState] = useState({
    content: {},
    method: "",
    group: [],
    loading: true,
    intro: "",
    paramDesc: "",
    paramsList: [],
    requiredReqList: [],
    reqBodyList: [],
    returnDesc: "",
    returnBody: "",
    requestSchema: "",
    schemaBody: [],
    url: "",
  });
  const { apiData } = useApiData();
  const { id } = useParams();
  const urlArray = window.location.pathname.split("/");
  const mainId = urlArray[urlArray.length - 2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const setGroup = useCallback(async () => {
    try {
      const curator = [];
      if (apiData?.paths) {
        Object.entries?.(apiData?.paths).forEach((item) => {
          if (Object.values(item)) {
            if (
              Object.values?.(item[1])
                .map?.((item) => item?.tags)
                .flat()
                .map?.((item) => linkTrimer?.(item))
                .includes(mainId)
            ) {
              curator.push(item);
            }
          }
        });
      }
      setState((prev) => {
        return {
          ...prev,
          group: curator,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }, [apiData?.paths, mainId]);

  useEffect(() => {
    setGroup();
  }, [setGroup]);

  const setContent = useCallback(() => {
    state.group?.map?.((item) => {
      Object.entries(item[1]).forEach(([key, value]) => {
        if (value?.operationId === id) {
          setState((prev) => {
            return {
              ...prev,
              content: value,
              method: key,
              url: item[0],
            };
          });
        }
      });
      return null;
    });
  }, [state.group, id]);

  useEffect(() => {
    setContent();
  }, [setContent]);

  useEffect(() => {
    const contentArr = state.content?.description
      ?.split("\n")
      .map((item) => item.trim(" "));
    const paramslist = [];
    const reqBodyList = [];
    contentArr?.map?.((item) => {
      const itemArr = item?.split("-->");
      if (itemArr[0] === "param") {
        paramslist.push(itemArr[1]);
      }
      if (itemArr[0] === "reqBody") {
        reqBodyList.push(itemArr[1]);
      }
      setState((prev) => {
        return {
          ...prev,
          paramsList: paramslist,
          reqBodyList: reqBodyList,
        };
      });
      setState((prev) => {
        return {
          ...prev,
          intro: itemArr[0] === "intro" ? itemArr[1] : prev.intro,
          paramDesc: itemArr[0] === "paramDesc" ? itemArr[1] : prev.paramDesc,
          returnBody:
            itemArr[0] === "returnBody" ? itemArr[1] : prev.returnBody,
          returnDesc:
            itemArr[0] === "returnDesc" ? itemArr[1] : prev.returnDesc,
        };
      });
      return "";
    });
  }, [state.content?.description]);

  //finding requestSchema
  useEffect(() => {
    setState((prev) => {
      return {
        ...prev,
        requestSchema: JSON.stringify(state.content?.requestBody?.content)
          ?.split("/")
          [
            JSON.stringify(state.content?.requestBody?.content)?.split("/")
              .length - 1
          ]?.replace(/[^a-z0-9]/gi, "")
          ?.trim(" "),
      };
    });
  }, [state.content?.requestBody?.content]);

  //schemaBody
  useEffect(() => {
    if (apiData?.components?.schemas) {
      const schemaToUse = Object.entries(apiData?.components?.schemas)?.find(
        (entry) => entry[0] === state.requestSchema
      );
      setState((prev) => {
        return {
          ...prev,
          schemaBody: schemaToUse,
          requiredReqList: schemaToUse?.[1]?.required,
        };
      });
    }
  }, [apiData?.components?.schemas, state.requestSchema]);

  return (
    <div className="workingwithget_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="contents">
        <div className="heading_container">
          <div className={`label ${state?.method}`}>{state?.method}</div>
          <div className="title">{state?.content?.summary}</div>
        </div>
        <div className="mb-30">
          <div className="subtitle mb-3">{state?.intro}</div>

          {state?.content?.parameters ? (
            <div className="mb-3">
              <h2>Parameters</h2>
              {state.paramDesc && <span>{state?.paramDesc}</span>}
              <div className="codeCardCon">
                <div className="codeCard">
                  <div className="mb-1">
                    <span className="codeCardKey">Request Url: </span>
                    <span className="codeCardValue">{state?.url}</span>
                  </div>
                  {state?.content?.parameters?.map((item) => {
                    return (
                      <>
                        <div key={Math.random()}>
                          <span className="codeCardKey">
                            {`"${item?.name}"`}:{" "}
                          </span>
                          <span className="codeCardValue">
                            {`[${item?.schema?.type}]`}
                          </span>
                          {
                            <span className="codeCardComment">
                              {state.paramsList?.map?.((i) => {
                                return i?.split(":")[0] === item?.name
                                  ? ` // ${i?.split(":")[1].trim("")}`
                                  : "";
                              })}
                            </span>
                          }
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-3">
              <h2>Parameters</h2>
              <div className="codeCardCon">
                <div className="codeCard">
                  <div className="mb-1">
                    <span className="codeCardKey">Request Url: </span>
                    <span className="codeCardValue">{state?.url}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {state?.content?.requestBody && (
            <div className="mb-3">
              <h2>Request Body</h2>
              <div className="returnSubHeader">
                <span>color code </span>
                <svg height="30" width="30">
                  <circle
                    cx="16"
                    cy="16"
                    r="8"
                    stroke="white"
                    stroke-width="1"
                    fill="#e5989b"
                  />
                </svg>
                <span>- Required</span>
              </div>
              <div>The payload for this request is specified below:</div>
              <div className="codeCardCon">
                <div className="codeCard">
                  <div className="codeCardKey">{"{"}</div>
                  {state?.schemaBody?.[1]?.properties &&
                    Object.entries(state?.schemaBody?.[1]?.properties)?.map?.(
                      ([key, value]) => (
                        <div
                          className="ml-2 codeCardCommentCon"
                          key={Math.random()}
                        >
                          <div className="left">
                            <span
                              className={`codeCardKey ${
                                state.requiredReqList.includes(key) &&
                                `required`
                              }`}
                            >
                              {`"${key}"`}: {""}
                            </span>
                            <span className="codeCardValue">{value?.type}</span>
                          </div>
                          <div className="right">
                            <span className="codeCardComment">
                              {state.reqBodyList?.map?.((item) => {
                                return item?.split(":")[0] === key
                                  ? ` //${item?.split(":")[1].trim("")}`
                                  : "";
                              })}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  <div className="codeCardKey">{"}"}</div>
                </div>
              </div>
            </div>
          )}
          <h2>Returns</h2>
          {state?.returnDesc}
          {state?.returnBody}
          {state?.content?.responses &&
            Object.entries(state?.content?.responses)?.map(([key, value]) => {
              const refCheck = JSON.stringify(value?.content)
                ?.split("/")
                [
                  JSON.stringify(value?.content)?.split("/").length - 1
                ]?.replace(/[^a-z0-9]/gi, "")
                ?.trim(" ");
              const arrayBrackets = JSON.stringify(value?.content)
                ?.split("/")[1]
                ?.includes("array");
              const schemaToUse = Object.entries?.(
                apiData?.components?.schemas
              )?.find((entry) => entry[0] === refCheck);

              console.log("schema to use", schemaToUse);

              return (
                <>
                  <div className="subHeaderRow">
                    <h2 className="subHeader">{key}</h2>
                    <span className="subHeaderSpan">
                      ({value?.description})
                    </span>
                  </div>
                  <div className="codeCardCon">
                    <div className="codeCard">
                      {arrayBrackets && (
                        <span className="codeCardKey">{`[{`}</span>
                      )}
                      {schemaToUse?.[1]?.properties ? (
                        Object.entries?.(schemaToUse?.[1]?.properties)?.map?.(
                          ([key, value]) => (
                            <div key={Math.random()}>
                              <span className="codeCardKey">
                                {`"${key}"`}:{" "}
                              </span>
                              <span className="codeCardValue">
                                {value?.type}
                              </span>
                            </div>
                          )
                        )
                      ) : (
                        <>
                          <span className="codeCardKey">
                            Response:
                            <span className="codeCardValue">
                              {state.returnBody}
                            </span>
                          </span>
                        </>
                      )}
                      {arrayBrackets && (
                        <span className="codeCardKey">{`},]`}</span>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
