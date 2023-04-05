// Yarn
import React, { useContext } from "react";
import { InputNumber, Divider, Space, Switch, Row, Col, Card } from "antd";

// Local
import { HomeAppContext } from "../Common";

const ScreenOne = (props) => {
  let { sensorData, temperatureData } = useContext(HomeAppContext);
  let temp = false;

  const onTempChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    console.log("assign this", sensorData);
  };

  const onChange = (checkedValues, checkedChildren) => {
    for (let i = 0; i < sensorData.length; i++) {
      if (sensorData[i].name === checkedChildren.target.innerText) {
        if (checkedValues === false) {
          sensorData[i].status = false;
        } else {
          sensorData[i].status = true;
        }
      }
    }
  };

  return (
    <>
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

      <Row>
        <Col span={3}>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="Kitchen" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="kitchen_overhead_light"
                        unCheckedChildren="kitchen_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="kitchen_window_1"
                        unCheckedChildren="kitchen_window_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="kitchen_window_2"
                        unCheckedChildren="kitchen_window_2"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="kitchen_water"
                        unCheckedChildren="kitchen_water"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
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
                      <Switch
                        checkedChildren="kitchen_door_out"
                        unCheckedChildren="kitchen_door_out"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="Living Room" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="livingroom_overhead_light"
                        unCheckedChildren="livingroom_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="livingroom_window_1"
                        unCheckedChildren="livingroom_window_1"
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
                        checkedChildren="livingroom_window_3"
                        unCheckedChildren="livingroom_window_3"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="livingroom_lamp_1"
                        unCheckedChildren="livingroom_lamp_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="livingroom_lamp_2"
                        unCheckedChildren="livingroom_lamp_2"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="livingroom_television"
                        unCheckedChildren="livingroom_television"
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
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>

          <br />
          {/* </Footer> */}
          {/* </Layout> */}
        </Col>

        <Col span={15}>
          <img src={require("../../graphics/floorplan.png")} alt=""></img>
        </Col>

        <Col span={3}>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="Master Bedroom" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="master_bedroom_overhead_light"
                        unCheckedChildren="master_bedroom_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="master_bedroom_window_1"
                        unCheckedChildren="master_bedroom_window_1"
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
                        checkedChildren="master_bedroom_lamp_1"
                        unCheckedChildren="master_bedroom_lamp_1"
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
                        checkedChildren="master_bedroom_television"
                        unCheckedChildren="master_bedroom_television"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="BedroomTwo" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="bedroom_two_overhead_light"
                        unCheckedChildren="bedroom_two_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_two_window_1"
                        unCheckedChildren="bedroom_two_window_1"
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
                        checkedChildren="bedroom_two_lamp_1"
                        unCheckedChildren="bedroom_two_lamp_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_two_lamp_2"
                        unCheckedChildren="bedroom_two_lamp_2"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="BedroomThree" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="bedroom_three_overhead_light"
                        unCheckedChildren="bedroom_three_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_three_window_1"
                        unCheckedChildren="bedroom_three_window_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_three_window_2"
                        unCheckedChildren="bedroom_three_window_2"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_three_lamp_1"
                        unCheckedChildren="bedroom_three_lamp_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bedroom_three_lamp_2"
                        unCheckedChildren="bedroom_three_lamp_2"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={3}>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="MasterBathroom" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="master_bath_overhead_light"
                        unCheckedChildren="master_bath_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="master_bath_window_1"
                        unCheckedChildren="master_bath_window_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="master_bath_exhaust_fan"
                        unCheckedChildren="master_bath_exhaust_fan"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="master_bath_water"
                        unCheckedChildren="master_bath_water"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="BathroomTwo" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="bath_two_overhead_light"
                        unCheckedChildren="bath_two_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bath_two_window_1"
                        unCheckedChildren="bath_two_window_1"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bath_two_exhaust_fan"
                        unCheckedChildren="bath_two_exhaust_fan"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                      <Switch
                        checkedChildren="bath_two_water"
                        unCheckedChildren="bath_two_water"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="LaundryRoom" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
                      <Switch
                        checkedChildren="laundry_overhead_light"
                        unCheckedChildren="laundry_overhead_light"
                        defaultChecked={temp}
                        onChange={onChange}
                      />
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
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Card size="small" title="Garage" style={{ width: 250 }}>
                <Space>
                  <Col>
                    <Row>
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
                    </Row>
                  </Col>
                </Space>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};



export { ScreenOne };
  function setCount(arg0: (count: any) => any) {
    throw new Error("Function not implemented.");
  }