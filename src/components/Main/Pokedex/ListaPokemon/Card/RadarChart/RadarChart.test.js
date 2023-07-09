import React from "react";
import { shallow } from "enzyme";
import RadarChart from "./RadarChart";

describe("RadarChart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RadarChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
