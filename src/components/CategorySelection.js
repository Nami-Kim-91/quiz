
const CategorySelection = ({categories,onCategorySelect}) => {
  console.log ( categories );
  return (
    <div className="category-selection">
      <h1>퀴즈 카테고리를 선택해 주세요</h1>
      {/* 1.카테고리를 button 으로 작성 */}
      {
        categories.map((txt,idx)=>{
          return <button
                  key={idx}
                  onClick={()=>{onCategorySelect(txt)}}
                  >{txt}</button>
        })
      }
    </div>
  );
};

export default CategorySelection;