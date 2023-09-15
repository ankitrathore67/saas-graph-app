import React, { useState, memo } from "react";
import { Graph } from "react-d3-graph";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import config from "src/config";

const GraphComp = ({ graphDetails, isFetching }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [clickedNode, setClickedNode] = useState({
    nodeId: "",
    nodeDetails: {},
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const id = isOpen ? "simple-popover" : undefined;

  const onClickNode = function (nodeId, nodeDetails) {
    setIsOpen(true);
    setClickedNode({
      nodeId: nodeId,
      nodeDetails: nodeDetails,
    });
  };

  const renderGraphUI = () => {
    if (isFetching) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Fetching...
        </div>
      );
    } else {
      return (
        <>
          <Graph
            id="graph"
            config={config}
            data={graphDetails}
            onClickNode={(nodeId, nodeDetails) =>
              onClickNode(nodeId, nodeDetails)
            }
          />

          <Popover
            id={id}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{}}
          >
            <Typography
              sx={{ p: 2 }}
              style={{
                backgroundColor: "#e9dada",
                height: "30px",
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`${clickedNode?.nodeDetails?.name} is clicked`}
            </Typography>
          </Popover>
        </>
      );
    }
  };
  return <div>{renderGraphUI()}</div>;
};

export default memo(GraphComp);
