import styled from 'styled-components';

export const Main = styled.div`
  height: 260px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const PathsContainer = styled.div`
  position: absolute;
  width: 99%;
  display: flex;
  justify-content: center;
`;

export const Path1 = styled.div`
  width: 150px;
  height: 100px;
  border: solid 1px #ccc;
  border-top: none;
  border-radius: 10px;
`;

export const Path2 = styled.div`
  width: 150px;
  height: 100px;
  border: solid 1px #ccc;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 10px;
`;

export const Path3 = styled.div`
  width: 150px;
  height: 100px;
  border: solid 1px #ccc;
  border-top: none;
  border-radius: 10px;
`;

export const StepsContainer = styled.div`
  position: absolute;
  width: 99%;
  display: flex;
  gap: 70px;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ProfileContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const TrainingContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  justify-content: flex-start;  
`;

export const LessonRequestContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  justify-content: flex-end;  
`;

export const DownloadAppContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  justify-content: flex-start;  
`;

export const Icon = styled.img`
  width: 50px;  
`;