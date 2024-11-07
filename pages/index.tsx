const Index = () => {
    return (
        <>
            <h2 className="text-black text-center text-2xl leading-[1.4] mb-6">유튜브의 성장, 비즈니스 마케팅을 위한<br />가장 쉽고 강력한 데이터 분석 툴, YOUTUBE VIEW ANALYZER.</h2>

            <p className="text-black text-center text-xl leading-[1.4] mb-6">유튜브의 영상, 키워드, 타이틀, 설명 등 분석을 통해 콘텐츠의 유입률을 늘리고, 비즈니스를 확장시켜보세요.</p>
            <div className="mb-5">
                <form className="flex items-center space-x-1.5">
                    <input type="search" placeholder="Search..." className="form-input" required />
                    <button type="button" className="btn btn-primary">
                        검색
                    </button>
                </form>
            </div>
        </>
    );
};

export default Index;
