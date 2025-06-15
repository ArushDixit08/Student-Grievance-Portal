import React from "react";

export default function SegmentedControl() {
  return (
    <>
        <div className="segmented-control">
            <div className="segmented-control1">
                <div className="item-1">
                    <div className="issue">ISSUE</div>
                </div>

                <div className="item-2">
                    <div className="issue">REPORT</div>
                </div>

                <div className="item-2">
                    <div className="issue">STATUS</div>
                </div>

                <div className="item-4">
                    <div className="issue">Popular</div>
                </div>
                
                <div className="item-4">
                    <div className="issue">New Releases</div>
                </div>
            </div>
        </div>
    </>
  );
}
