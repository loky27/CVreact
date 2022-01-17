import React from "react";
export default function Targ(props) {
  return (
<div>
  <p>
    <a
      class="btn btn-primary"
      data-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      {props.bottom}
    </a>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
        {props.text}
    </div>
  </div>
</div>
  );
}
