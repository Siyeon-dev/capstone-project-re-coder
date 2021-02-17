import React from "react";

const TestScreen = () => {
  return (
    <div className="test_screen_wrapper">
      <div className="test_screen_top">
        <div className="logo">
          <img src="../img/test_screen_logo.gif" alt="Re:Coder" />
        </div>
        <ul>
          <li>우당탕탕웹디제이</li>
          <li>2020학년도 1학기 중간고사</li>
        </ul>
      </div>
      <div className="test_scren_nav">
        <p className="quiz_num">문제 1</p>
        <div className="test_select">
          <select name="test_start_time" id="slct">
            <option value="1">문제 1</option>
            <option value="2">문제 2</option>
            <option value="3">문제 3</option>
            <option value="4">문제 4</option>
          </select>
        </div>
        <ul>
          <li className="test_time_limit">30:00</li>
          <li>제출하기</li>
          {/* <li>문의하기</li> 2021.02.16 보류 */}
        </ul>
      </div>

      <div className="std_test_area">
        <div className="std_test_wrapper">
          <div className="test_guide_section">
            <div className="scroll_area">{/* 문제 설명 */}</div>
          </div>
          <div className="middle_bar"></div>
          <div className="code_editor_section">
            <div id="overlay_div">
              <div className="std_coding_area">
                <div className="coding_nav">
                  <p className="file_name">Soulution.Java</p>
                  <ul>
                    <li>JAVA</li>
                    <li className="compile_btn">컴파일 하기</li>
                  </ul>
                </div>
                <div className="code_compiler_area">
                  <div className="scroll_area">{/* 코드 컴파일러 */}</div>
                </div>
                <div className="code_compiler_result">
                  <p className="tit">실행결과</p>
                  <div className="scroll_area">{/* 코드 실행 결과 */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
