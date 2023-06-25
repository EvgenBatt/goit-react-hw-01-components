import styled from '@emotion/styled';

export const CardProfile = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #525252',
  borderRadius: '4px',
  background: 'white',
  padding: '10px',
});

export const ImgProfile = styled.img`
  width: 150px;
  height: 150px;
`;

export const Description = styled.div`
  background-color: #b1b1b1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 1.5;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 1.5;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 1.5;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 1.5;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 1.5;
`;
