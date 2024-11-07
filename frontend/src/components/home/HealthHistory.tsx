import CircularProgressBar from 'react-customizable-progressbar';
import { useState } from 'react';
import { HeightFitFlex } from '@components/common/Flex';
import { Text } from '@/components/common/Typo';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { ClickBtn } from '../mypage/profile';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ProductType } from '@/assets/types/ProductType';
import { NutrientType } from '@/apis/health';
import { Product } from '../store/Product';
import { CenterText, InnerText, RelativeWrapper } from '@/pages/Health/Result';
import { useNavigate } from 'react-router-dom';

const description = {
  칼로리:
    '칼로리 부족은 단순히 체중 감소를 초래할 뿐 아니라, 장기적으로 강아지의 전반적인 건강과 생활의 질에 영향을 미칩니다.',
  탄수화물:
    '탄수화물이 부족하면 활동적인 시간을 유지하기 힘들어 하고 쉽게 지칠 수 있어요.',
  단백질:
    '단백질이 부족하면 근육 손실, 면역력 저하, 털과 피부 상태 악화 등의 문제가 발생할 수 있어요.',
  지방: '지방을 충분히 섭취하지 못하면 면역력이 약해져 바이러스 등의 질병에 더 취약해질 수 있어요.',
  비타민A: '비타민 A가 부족하면 야맹증이나 시력 저하가 발생할 수 있어요.',
  비타민D:
    '비타민 D가 부족하면 강아지의 뼈가 약해져 쉽게 부러지거나 기형적으로 자랄 수 있어요.',
  비타민E: '비타민 E 결핍은 근육 조직의 손상을 초래해요.',
  칼슘: '칼슘이 부족하면 뼈와 치아 건강뿐만 아니라 신경, 근육 기능에도 여러 가지 문제가 발생할 수 있어요.',
};

const dummy = [
  {
    productId: '1',
    category: 'food',
    productImg:
      'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/7295993519305983-34d2ca7f-5ca8-4a5e-ba39-b9776d147b49.jpg',
    title: '탐사 6free 강아지 사료 연어 레시피, 6kg, 연어, 1개',
    price: 25990,
    averageScore: 5,
  },
  {
    productId: '2',
    category: 'food',
    productImg:
      'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/7295993519305983-34d2ca7f-5ca8-4a5e-ba39-b9776d147b49.jpg',
    title: '탐사 6free 강아지 사료 연어 레시피, 6kg, 연어, 1개',
    price: 25990,
    averageScore: 5,
  },
];

const HealthHistory = ({
  petname,
  nutrientData,
}: {
  petname: string;
  nutrientData: NutrientType;
}) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [recommendedProductList] =
    useState<ProductType[]>(dummy);
    // const [recommendedProductList, setRecommendProductList] =
    // useState<>(nutrientData.recommendProducts);
  const handleClick = () => setisOpen(!isOpen);
  const navigate = useNavigate();
  const handleNavigate = (productId: string) =>
    navigate(`/store/detail/${productId}`);

  return (
    <>
      <HeightFitFlex
        direction="column"
        justify="flex-start"
        align="flex-start"
        padding="0 12px"
        gap={10}
        margin="12px 0 0 0"
      >
        <Text typo="Heading3" colorCode={colors.Black}>
          이전 건강 분석
        </Text>

        <ProductWrapper
          isOpen={isOpen}
          direction="column"
          justify="flex-start"
          align="flex-start"
          gap={10}
        >
          <ClickBtn
            direction="row"
            justify="space-between"
            onClick={handleClick}
          >
            <Text typo="Label1" colorCode={colors.Black}>
              {petname}의 식단
            </Text>
            {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
          </ClickBtn>

          {/* 건강 분석 결과 영역 */}
          <HeightFitFlex gap={5}>
            <RelativeWrapper>
              <CircularProgressBar
                progress={Math.min(
                  Math.floor(
                    (nutrientData?.calories.current /
                      nutrientData?.calories.recommended) *
                      100,
                  ),
                  100,
                )}
                radius={100}
                cut={70}
                rotate={125}
                strokeColor={colors.MainColor}
                strokeWidth={20}
                trackStrokeWidth={20}
              />
              <CenterText direction="column">
                <InnerText typo="Heading2">
                  {nutrientData?.calories.current} /{' '}
                  {nutrientData?.calories.recommended}
                </InnerText>
                <InnerText typo="Heading2">Kcal</InnerText>
              </CenterText>
            </RelativeWrapper>
            <HeightFitFlex direction="column">
              <HeightFitFlex justify="flex-start" align="flex-end">
                <Text typo="Label1">
                  <MarkText>{petname}</MarkText>은 현재
                </Text>
              </HeightFitFlex>
              <HeightFitFlex justify="flex-start">
                <Text typo="Label1">
                  <MarkText>{`${nutrientData.deficientNutrients[0]}, ${nutrientData.deficientNutrients[1]}`}</MarkText>
                  (이)가 부족해요!
                </Text>
              </HeightFitFlex>
              <HeightFitFlex
                direction="column"
                align="flex-start"
                margin="5px 0 0 0"
                gap={5}
              >
                <Text typo="Body3" colorCode={colors.Gray500}>
                  {`${description[nutrientData.deficientNutrients[0]]}`}
                </Text>
                <Text typo="Body3" colorCode={colors.Gray500}>
                  {`${description[nutrientData.deficientNutrients[1]]}`}
                </Text>
              </HeightFitFlex>
            </HeightFitFlex>
          </HeightFitFlex>

          {/* 추천 상품 영역 */}
          {isOpen && (
            <>
              <Text typo="Label1" colorCode={colors.Black}>
                포슬의 추천상품
              </Text>
              <HeightFitFlex margin="10px 0" gap={12} width="100%">
                {recommendedProductList.length > 0 && (
                  <HeightFitFlex direction="row" justify="flex-start">
                    {recommendedProductList.map((product: ProductType) => (
                      <ProductWrapper
                        key={product.productId}
                        isOpen={isOpen}
                        margin="0 10px 0 0"
                        onClick={() => handleNavigate(product.productId)}
                      >
                        <Product
                          price={product.price}
                          productId={product.productId}
                          productImg={product.productImg}
                          title={product.title}
                          averageScore={product.averageScore}
                          imgWidth="80%"
                        />
                      </ProductWrapper>
                    ))}
                  </HeightFitFlex>
                )}
              </HeightFitFlex>
            </>
          )}
        </ProductWrapper>
      </HeightFitFlex>
    </>
  );
};

export default HealthHistory;

const ProductWrapper = styled(HeightFitFlex)<{ isOpen: boolean }>`
  border: solid 1px ${colors.Gray100};
  border-radius: 5px;
  padding: 12px 10px;
  background-color: ${({ isOpen }) => (isOpen ? colors.Gray50 : 'transparent')};
  margin-bottom: 12px;
`;

export const MarkText = styled.span`
  color: ${colors.MainColor};
`;