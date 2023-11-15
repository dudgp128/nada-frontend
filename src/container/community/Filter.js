/** Filter 메인페이지에서 필터를 관리하는 컨테이너 */
import styled from "styled-components";
import { DropDown } from "../../components/community/Dropdown";
import { useSelector } from "react-redux";
import { communitySelector } from "../../module/Community/community";
import { FilterItems } from "./FilterItems";

const Filter = () => {
  //특정 필터버튼이 활성화 상태라면 해당 필터에 따른 내용을 FilterItems를 통해 출력
  const isOpen = useSelector(communitySelector("buttonSelect", "filter"));

  return (
    <div>
      <Filterlist>
        <DropDown text="지역" id={0} />
        <DropDown text="분야" id={1} />
        <DropDown text="종류" id={2} />
      </Filterlist>
      {isOpen && <FilterItems text={isOpen} />}
    </div>
  );
};

export default Filter;

const Filterlist = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;

  & > .view {
    flex: 0 0 auto !important;
  }
  & > .drop-down-instance {
    height: 6px !important;
    margin-right: unset !important;
    width: 12px !important;
  }
`;
