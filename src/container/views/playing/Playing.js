import React from "react";

const Playing = () => {
  return (
    <div>
      <Question
        photoUrl="https://i.pinimg.com/originals/88/bc/6f/88bc6ff8c5b6b5bbb4d3d7e763ed7dc1.jpg"
        title="what is in picture?"
      ></Question>
      <Row>
        <Col span={12}>
          <Answer id="A" title="School"></Answer>
        </Col>
        <Col span={12}>
          <Answer id="B" title="house"></Answer>
        </Col>
        <Col span={12}>
          <Answer id="c" title="chicken"></Answer>
        </Col>
        <Col span={12}>
          <Answer id="d" title="university"></Answer>
        </Col>
      </Row>
    </div>
  );
};

export default Playing;
