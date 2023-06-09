import { styled } from 'styled-components';

const Pagination = ({ total, limits, page, setPage }) => {
  /**
   * total : 상품 총 개수
   * limits : 한 페이지에 표시되는 상품 개수
   * page : 현재 페이지
   * setPage : 현재 페이지를 정하는 setter
   * const [ page, setPage ] = useState(1) -> useState로 선언해서 props로 넘겨줘야 함
   */

  const numPagesList = Math.ceil(total / limits);

  return (
    <Container>
      <Pages>
        <Button
          onClick={() => setPage(1)}
        >
          <Image src='/assets/product_list/button/btn_page_first.png' />
        </Button>
        <Button
          onClick={() => setPage(page - 1)}
        >
          <Image src='/assets/product_list/button/btn_page_prev.png' />
        </Button>
        {
          Array(numPagesList)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? 'page' : null}
              >
                <Index>{i + 1}</Index>
              </Button>
            ))
        }
        <Button
          onClick={() => setPage(page + 1)}
        >
          <Image src='/assets/product_list/button/btn_page_next.png' />
        </Button>
        <Button
          onClick={() => setPage(numPagesList)}
        >
          <Image src='/assets/product_list/button/btn_page_last.png' />
        </Button>
      </Pages> 
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  gap: 20px;
  color: #939393;

  &[aria-current] {
    color: #222;
  }
`;

const Index = styled.span`
  width: 33px;
  font-size: 15px;
  font-family: 'LatoRegular','Noto Sans KR';
`;

const Image = styled.img`
`;

export default Pagination;