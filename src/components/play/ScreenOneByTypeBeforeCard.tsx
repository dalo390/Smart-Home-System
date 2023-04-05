// Yarn
import React, { useContext } from "react";
import { InputNumber, Divider, Space, Switch, Row, Col, Card } from "antd";

// Local
import { HomeAppContext } from "../Common";

const ScreenOne = (props) => {
  let { dateData, sensorData, temperatureData } = useContext(HomeAppContext);
  let temp = false;
  // console.log("PLEASE S3", sensorData[0]?.status);
  // console.log("assign this", sensorData);

  for (let i = 0; i < sensorData.length; i++) {
    // console.log("alsdkjfhaklsjdfhalksjdf", sensorData[i].name);
  }
  const onTempChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onChange = (checkedValues, checkedChildren) => {
    console.log("checked = ", checkedValues, checkedChildren.target.innerText);

    for (let i = 0; i < sensorData.length; i++) {
      if (sensorData[i].name === checkedChildren.target.innerText) {
        if (checkedValues === false) {
          sensorData[i].status = false;
          // temp_status = false;
        } else {
          sensorData[i].status = true;
          // temp_status = true;
        }
      }
    }

    console.log("SCREEN1 this", sensorData);
  };
  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    {
      key: "tab2",
      tab: "tab2",
    },
  ];

  const contentList = {
    tab1: (
      <p>
        <Switch
          checkedChildren="kitchen_overhead_light"
          unCheckedChildren="kitchen_overhead_light"
          defaultChecked={temp}
          onChange={onChange}
        />
      </p>
    ),
    tab2: <p>content2</p>,
  };

  return (
    <>
      <Divider orientation="left"></Divider>
      <Row>
        <Space>
          <Col span={2}></Col>
          <Col span={2}>
            <Switch
              checkedChildren="kitchen_overhead_light"
              unCheckedChildren="kitchen_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="livingroom_overhead_light"
              unCheckedChildren="livingroom_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="master_bedroom_overhead_light"
              unCheckedChildren="master_bedroom_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bedroom_two_overhead_light"
              unCheckedChildren="bedroom_two_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bedroom_three_overhead_light"
              unCheckedChildren="bedroom_three_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="master_bath_overhead_light"
              unCheckedChildren="master_bath_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bath_two_overhead_light"
              unCheckedChildren="bath_two_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="laundry_overhead_light"
              unCheckedChildren="laundry_overhead_light"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}></Col>
        </Space>
      </Row>
      <Row>
        <Space>
          <Col span={2}></Col>

          <Col span={2}>
            <Switch
              checkedChildren="kitchen_window_1"
              unCheckedChildren="kitchen_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="livingroom_window_1"
              unCheckedChildren="livingroom_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="master_bedroom_window_1"
              unCheckedChildren="master_bedroom_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bedroom_two_window_1"
              unCheckedChildren="bedroom_two_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bedroom_three_window_1"
              unCheckedChildren="bedroom_three_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="master_bath_window_1"
              unCheckedChildren="master_bath_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}>
            <Switch
              checkedChildren="bath_two_window_1"
              unCheckedChildren="bath_two_window_1"
              defaultChecked={temp}
              onChange={onChange}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
        </Space>
      </Row>

      <Row>
        <Space>
          <Switch
            checkedChildren="kitchen_window_2"
            unCheckedChildren="kitchen_window_2"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="livingroom_window_2"
            unCheckedChildren="livingroom_window_2"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="master_bedroom_window_2"
            unCheckedChildren="master_bedroom_window_2"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="bedroom_two_window_2"
            unCheckedChildren="bedroom_two_window_2"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="bedroom_three_window_2"
            unCheckedChildren="bedroom_three_window_2"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>

      <Row>
        <Space>
          <Switch
            checkedChildren="livingroom_window_3"
            unCheckedChildren="livingroom_window_3"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="livingroom_lamp_1"
            unCheckedChildren="livingroom_lamp_1"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="master_bedroom_lamp_1"
            unCheckedChildren="master_bedroom_lamp_1"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="bedroom_two_lamp_1"
            unCheckedChildren="bedroom_two_lamp_1"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="bedroom_three_lamp_1"
            unCheckedChildren="bedroom_three_lamp_1"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>

      <Row>
        <Space>
          <Switch
            checkedChildren="livingroom_lamp_2"
            unCheckedChildren="livingroom_lamp_2"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="master_bedroom_lamp_2"
            unCheckedChildren="master_bedroom_lamp_2"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="bedroom_two_lamp_2"
            unCheckedChildren="bedroom_two_lamp_2"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="bedroom_three_lamp_2"
            unCheckedChildren="bedroom_three_lamp_2"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="livingroom_television"
            unCheckedChildren="livingroom_television"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="master_bedroom_television"
            unCheckedChildren="master_bedroom_television"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="kitchen_door_out"
            unCheckedChildren="kitchen_door_out"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="livingroom_door_garage"
            unCheckedChildren="livingroom_door_garage"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="livingroom_door_out"
            unCheckedChildren="livingroom_door_out"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="kitchen_water"
            unCheckedChildren="kitchen_water"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="master_bath_water"
            unCheckedChildren="master_bath_water"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="bath_two_water"
            unCheckedChildren="bath_two_water"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="kitchen_stove"
            unCheckedChildren="kitchen_stove"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="kitchen_microwave"
            unCheckedChildren="kitchen_microwave"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="kitchen_refrigerator"
            unCheckedChildren="kitchen_refrigerator"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="kitchen_dishwasher"
            unCheckedChildren="kitchen_dishwasher"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="master_bath_exhaust_fan"
            unCheckedChildren="master_bath_exhaust_fan"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="bath_two_exhaust_fan"
            unCheckedChildren="bath_two_exhaust_fan"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>
      <Row>
        <Space>
          <Switch
            checkedChildren="laundry_clothes_washer"
            unCheckedChildren="laundry_clothes_washer"
            defaultChecked={temp}
            onChange={onChange}
          />

          <Switch
            checkedChildren="laundry_clothes_dryer"
            unCheckedChildren="laundry_clothes_dryer"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>

      <Row>
        <Space>
          <Switch
            checkedChildren="garage_door_1"
            unCheckedChildren="garage_door_1"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="garage_door_2"
            unCheckedChildren="garage_door_2"
            defaultChecked={temp}
            onChange={onChange}
          />
          <Switch
            checkedChildren="garage_water"
            unCheckedChildren="garage_water"
            defaultChecked={temp}
            onChange={onChange}
          />
        </Space>
      </Row>

      <Divider orientation="left"></Divider>

      <Space>
        Thermostat
        <InputNumber
          min={0}
          max={99}
          defaultValue={temperatureData[0]?.interior_temp}
          onChange={onTempChange}
        />
        Outside Temperature
        <InputNumber
          min={-50}
          max={150}
          defaultValue={temperatureData[0]?.exterior_temp}
          onChange={onTempChange}
          disabled={true}
        />
      </Space>

      <Divider orientation="left"></Divider>

      <img src={require("../../graphics/floorplan.png")} alt=""></img>
    </>
  );
};

export { ScreenOne };
