import styled from 'styled-components';

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.img`
  cursor: pointer;
  width: 20px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TestimonialContainer = styled.div`
  margin-bottom: 30px;
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #c7373c;
  overflow: hidden;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;

export const DescriptionContainer = styled.div`
  margin: -50px 30px -40px 30px;
  padding: 60px 40px 30px 30px;
  border: 1px solid #ea816b;
`;

export const DescriptionTextContainer = styled.div`
  font-size: 15px;
  color: #5e595b;
  line-height: 27px;
  margin: 0;
  margin-left: 35px;
  position: relative;
`;

export const DescriptionText = styled.p`
  overflow: hidden;
  display: inline-block;
  &:before {
    content: "“";
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 900;
    font-size: 50px;
    color: #d7d7d7;
    position: absolute;
    top: 10px;
    left: -35px;    
  }  
`;

export const Student = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;  
  padding: 12px;
  margin: 12px 50px;
  background: #fff;
  border: 1px solid #ea816b;
  font-size: 20px;
  font-weight: bold;
  color: #FF5500;
  line-height: 1;
  letter-spacing: 1px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  margin: 10px 5px 8px 0;
  text-align: left;
  line-height: 1.3;
`;

export const Dash = styled.span`
  margin-right: 5px;
  font-size: 20px;
  color: #666;
  text-align: left;
  font-weight: normal;  
  line-height: 25px;  
`;

export const OrganizationLink = styled.a`
  color: #666;
  text-decoration: underline #FFC634;
  -webkit-text-decoration: underline #FFC634;
`;

export const Organization = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #666;
  text-align: left;
  font-weight: normal;  
  line-height: 25px; 
`;