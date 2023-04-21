const BranchValidator = (branchName, branchCode) => {
  // 대소문자 영문자와 숫자만 허용하는 정규식
  const pattern = /^[a-zA-Z0-9]+$/;

  // 각각의 입력값이 정규식 패턴과 일치하는지 검사
  const isBranchNameValid = pattern.test(branchName);
  const isBranchCodeValid = pattern.test(branchCode);

  // 둘 다 유효한 경우 true 반환
  return isBranchNameValid && isBranchCodeValid;
};

export default BranchValidator;
