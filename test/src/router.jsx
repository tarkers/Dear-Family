import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/" />
    {/* <Route path="*" element={<t.Intro />} /> */}
    <Route path="*" />
    <Route path="story">
      {/* <Route path=":person" element={<t.Story />} /> */}
    </Route>
    <Route path="letter" />
    <Route path="download/:id" />
  </Route>
);
