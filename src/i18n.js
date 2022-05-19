import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      loginTitle: 'Log in with your social media account',
      loginAuthentication: 'Or member information authentication',
      loginRemember: 'Remember Me',
      loginSubmit: 'Sign In',
      loginPassword: 'Password',
      loginEmail: 'Email',
      'login_error_email': 'Invalid ID or password is wrong',
      'login_error_password': 'Invalid ID or password is wrong.',
      navigationHome: 'Home',
      naviationSearchPlaceholder: 'Company / Model / Serial',
      naviationWelcome: 'Welcome',
      naviationLogout: 'Logout',
      sidebarSummary: 'Summary',
      sidebarPrinters: 'Printers',
      sidebarCustomers: 'Customers',
      sidebarNewPrinters: 'New printers',
      sidebarWaitingPrinters: 'Waiting printers',
      sidebargUsers: 'Users',
      sidebarSettings: 'Settings',
      sidebarNotices: 'Notice',
      sidebarDataProcess: 'Data process histories',
      sidebarSearchHistory:'Search History',
      sidebarModel:'Model',
      sidebarGroupManagement:"Group Management",
      sidebarPrinterSearch:'Printer Search',
      sidebarAdministrators:'Administrators',
      sidebarContact: 'Contacts',
      settingsTitle: 'Settings',
      settingsWarningDuration: 'Warning duration(day) : No email/data',
      settingsShortTime: 'High usage in short time(count): compare 1 day before',
      settingsNoUsage: 'No usage in days',
      settingsCompletelyDelete: 'Completely delete printers(days)',
      settingsDefaultSenderEmail: 'Default sender email',
      settingsAdditionalSenderEmail: 'Aditional sender email',
      settingsCompanyName: 'Comapany name',
      settingsSave: 'Save',
      settingsCancel: 'Cancel',
      dashboardAll:'All',
      dashboardNormal:'Normal',
      dashboardCaution:'Caution',
      dashboardCheck:'Check',
      dashboardStatus:'Status',
      dashboardBookmarks:'Bookmarks',
      'dashboardThere is no favorite material':'There is no favorite material',
      'dashboardContract status':'Contract status',
      'dashboardDevice name':'Device name',
      'dashboardSerial Number':'Serial Number',
      dashboardLocation:'Location',
      'dashboardCustomer Name':"Customer's Name",
      'dashboardStart date':'Start date',
      'dashboardEnd date':'End date',
      'dashboardOption list':'Timeline',
      dashboardAAll:'All',
      'dashboardToner/Ink':'Toner/Ink',
      dashboardDrum:'Drum',
      dashboardOthers:'Others',
      dashboardDevice:'Device',
      dashboardTray:'Tray',
      'dashboardNo Paper':'No Paper',
      dashboardAdf:'AdF',
      'dashboardNot Defined':'Not Defined',
      'dashboardSelect type':'Select type',
      'dashboardDate time':'Date time',
      dashboardKind:'Kind',
      dashboardEPSOFT:"Customer's name",
      'dashboardPrinter name':"Printer's name",
      dashboardNote:'Note',
      dashboardType:'Type',
      'dashboardCustomer name':"Customer's name",
      dashboardClose:'Close',
      dashboardSelect:'Select',
      'printerEquipment list':'Printer list',
      'printerHome':'Home',
      'printerAll':'All',
      'printernormal':'Normal',
      'printercaution':'Caution',
      'printercheck':'check',
      'printerExcel':'Excel',
      'printerToday':'Today',
      'printercustomer':'Customers',
      'printerModel':'Model',
      'printerLast update date':'Last update date',
      'printerTotal count':'Total counts',
      'printerDelta':'Delta',
      'printerColour count':'Colour counts',
      'printerMono':'Mono',
      'printerStatus':'Status',
      'printerDellTa':'Delta',
      'printerBack page':'Back page',
      'printerNext page':'Next page',
      'printerPage':'Page',
      'printerGun':'Total',
      'printersConsumables':'Consumables',
      'newPrinterNew printer':'New printers',
      'newPrinterHome':'Home',
      'newPrinterRegistered date':'Registered date',
      'newPrinterAction':'Action',
      'newPrinterWaiting':'Waiting',
      'newPrinterAssignment':'Assignment',
      'newPrinterdelete':'Delete',
      'newPrinterConfirm deletion':'Confirm deletion',
      'newPrinterAre you sure you want to delete it?':'Are you sure you want to delete it?',
      'newPrinterclose':'Close',
      'newPrinterWaiting reason':'Waiting reason',
      'newPrinterStandby':'Standby',
      'newPrinterNote':'Notes',
      'usersemail':'Email',
      'usersName':'Name',
      'usersJoin date':'Join date',
      'usersStatus':'Status',
      'usersUser registration':'User registration',
      'usersEmail Address':'Email Address',
      'usersConfirm Email Address':'Confirm Email Address',
      'usersMobile Number':'Mobile Number',
      'usersAdd':'Add',
      'usersEquipment deletion rights':'Equipment deletion rights',
      'settingSettings':'Settings',
      'settingWarning duration(day)':'Warning duration(day) : No email/data',
      'settingHigh usage in short time':'High usage in short time(count): compare 1 day before',
      'settingNo usage in days':'No usage in days',
      'settingCompletely delete printers(days)':'Completely delete printers(days)',
      'settingDefault sender email':'Default sender email',
      'settingAditional sender email':'Aditional sender email',
      'settingCompany name':'Company name',
      'settingSave':'Save',
      'settingcancel':'Cancel',
      'noticeNotice':'Notice',
      'noticeWriter':'Writers',
      'noticeContents':'Contents',
      'noticeRegistered date':'Registered date',
      'processData/Email process history':'Data/Email process history',
      'processSearch':'Search',
      'processDate':'Date',
      'processNo':'No',
      'processSearchDate':'Search Date',
      'processRegistration':'Registration File/IP Range',
      'processNormalDetected':'Normal Detected',
      'processAbnormalDetected':'Abnormal Detected',
      'processNotDetected':'Not Detecetd',
      'processStatus':'Status',
      'processSearchResult':'Search Result',
      "processIpAddress":'IP Address',
      'processEndIp':'End IP',
      'processStartIp':'Start IP',
      "processagent":'Agent',
      'processSearchBtn':'Search',
      'processSerialNumber':'Serial Number',
      'processPrinterModel':'Printer Modal',
      'processIp':'IP',
      'processHostName':'Host Name',
      'processRegisterPrinter':'Register Printer',
      'processDepartmentName':'Department Name',
      'processLocation':'Location',
      'processSelect':'Select',
      'processPrintersDetail':'Printers Detail',
      'processMemo':'Memo',
      'processEndDate':'End Date',
      'processStartDate':'Start Date',
      'processContract':'Contract',
      'processPrinterinformation':'Printer Information',
      'processDeleteBtn':'Delete',
      'processRegisterBtn':'Register',
      'processType':'Type',
      'processModelUsageThreshold':'Model Usage Threshold',
      'processModelConsumableThreshold':'Model Consumable Threshold',
      'processRegistrationDate':'Registration Date',
      'processRemark':'Remark',
      'processUpperDepartment':'Upper Department',
      'processExport':'Export',
      'processImport':'Import',
      'processDelete':'Delete',
      'processAdd':'Add',
      'processSearch':'Search:',
      'processEntries':'Entries',
      'processShow':'Show',
      'processTree':'Tree',
      'processDepartment':'Department',
      'processGroup':'Group',
      'processMax':'Max',
      'processMin':'Min',
      'processOther':'Other',
      'processTransfer':'Transfer',
      'processOPC':'OPC',
      'processDeveloper':'Developer',
      'processFuser':'Fuser',
      'processToner':'Toner',
      'processClient':'Client',
      'processReduced-Size':'Reduced-Size',
      'processFull-Size':'Full-Size',
      'processImage':'Image',
      'processDescription':'Description',
      'processDriver':'Driver',
      'processSupplyType':'Supply Type',
      'processModelType':'Model Type',
      'processDownloadDriver':'Download Driver',
      'processNoOfPriners':'No of priners in the now',
      'processManufacturer':'Manufacturer',
      'processName':'Name',
      'processMessage':'Message',
      'processCustomer name':"Customer's name",
      'processDisplay name':"Display name",
      'processPrinter name':"Printer's name",
      'processPartner name':"Partner's name",
      'summarySummary':'Summary',
      'summaryModified':'Modified',
      'summarydelete':'Delete',
      'summaryHome':'Home',
      'summaryEquipment summary':'Equipment summary',
      'summaryExpendables':'Expendables',
      'summaryDetail':'Detail',
      'summaryUsage page':'Usage page',
      'summaryPaper size':'Paper size',
      'summarycolor':'Colors',
      'summarytype':'Type',
      'summaryboth sides':'Both sides',
      'summaryLong live':'Long live',
      'summaryChange':'Change',
      'summarytray':'Tray',
      'summaryVolume':'Volume',
      'summaryPaper type':'Paper type',
      'summarystate':'State',
      'summaryevent':'Event',
      'summarymemo':'Memo',
      'summaryreport':'Report',
      'summaryConfirm deletion':'Confirm deletion',
      'summaryAre you sure you want to delete it':'Are you sure you want to delete it?',
      'summaryclose':'Close',
      'summaryDevice list':'Device list',
      'summaryModel':'Model',
      'summaryLast update date':'Last update date',
      'summaryusage':'Usage',
      'summaryPage':'Page',
      'summaryBack page':'Back page',
      'summaryNext page':'Next page',
      'summaryEquipment modification':'Equipment modification',
      'summarycompany name':'Company name',
      'summaryAdd':'Add',
      'summaryPlaceholder':'You can enter more than 100 characters',
      'summarySearch by':'Search by.',
      'summaryEquipment location':'Equipment location',
      'summaryPrinter information':'Printer information',
      'summarySave':'Save',
      'summarycancel':'Cancel',
      'summaryFrom':'Contract Start',
      'summaryTo':'Contract End',
      'summaryAdd company':'Add company',
      'summaryname':'Name',
      'summaryName the customer':'Name the customer',
      'summaryTerm':'Term',
      'summaryBreakdown':'Breakdown',
      'summaryContract details':'Advanced Search',
      'contractFomrMemo':'Memo',
      'summaryStart of contract':'Start of contract',
      'summaryContract termination':'Contract termination',
      'summaryDate of revision':'Date of revision',
      'summaryEquipment screen':'Current',
      'summaryMemo':'Memo',
      'summaryAdd a note':'Add a note',
      'summaryYou cannot enter more than 100 characters':'You cannot enter more than 100 characters.',
      'summaryAdvanced Search':'Advanced Search',
      'summaryConsumable details and replacement history':'Consumable details and replacement history',
      'summaryPages left (approximately)':'Pages left (approximately)',
      'summarySerial Number':'Serial Number',
      'summaryPrinted page':'Printed page',
      'summaryInitial installation date':'Initial installation date',
      'summaryLast use date':'Last use date',
      'summaryReplacement history':'Replacement history',
      'summaryReplacement_history_table':'undefined',
      'summaryToner':'Toner',
      'summarydrum':'drum',
      'summaryEtc':'Etc',
      'User information':'User information',
      'userss{item}':'Approved',
      'users deletion rights':'Equipment deletion rights',
      'customerCustomer modification':'Customer modification',
      'customerCustomer equipment list':'Customer equipment list',
      'customerrNo of device per customer':'No of device per customer',
      'customerrHome':'Home',
      'customerrCustomer Name':"Customer's name",
      'customerrDevice count':'Device counts',
      'userPageUsage page':'Usage page',
      'userPageequipment':'equipment',
      'userPagestart':'start',
      'userPageEnd':'End',
      'userPageSave':'Save',
      'userPageSend report mail':'Send report mail',
      'userPageexport':'export',
      'userPageDetailed report search':'Detailed report search',
      'userPageExcel':'Excel',
      'userPageList':'List',
      'userPageglance':'glance',
      'userPagemonthly':'monthly',
      'userPagedate':'YEARLY',
      'userPageGray-scale':'Gray-scale',
      'userPageall':'all',
      'userPageBlack and white':'Black and white',
      'userPagecolor':'color',
      'userPageSum':'Sum',
      'oktalkTitle': 'OK Talk',
      'Update Profile':"Update Profile",
      "Edit":'Edit',
      "chatNoMemo": 'There is no memo!!',
      "noDataFound": "No data found",
      "searchCompany": "Company",
      "breakDown": 'Breakdown',
      "chatYesterday": "Yesterday",
      "contractStart": "Start of contract",
      "contractTermination": "Contract termination",
      "contractMemo": "Memo",
      "contractDate": "Registered date	",
      "contractVersion": "Date of revision",
      "contractHeader": "Contract details",
      "summaryPrinterContract": "Contract",
      "selectPrinterChat": "Please select printer to see memo(s)!!",
      "chatImagePreview": "Preview",
      "printersReportFrom": "From",
      "printersReportTo": "To",
      "noticeNoMoreDisplay": "No More Display",
      "noticeReadMore": "Read More",
      "dashboardLabel": "Dashboard",
      "dashboardRemaingDate": "Remain date",
      "timelineDate": "Date",
      "userEditApprove": "Approval",
      "popupSaved": "Saved successfully",
      "popupSent": "Sent",
      "popupCreated": "Created Successfully.",
      "popupDeleted": "Deleted Successfully.",
      "popupApproved": "Approved",
      "popupEdited": "Edited Successfully.",
      "popupSomethingWrong": "Something went wrong. Please contact to administrator",
      "defaultSelectPrinterChat":"Please select a printer.",
      "typeMessageHereHint":"Type message here.",
    },
  },
  ko: {
    translation: {
      loginTitle: 'SNS 계정으로 로그인하세요.',
      loginAuthentication: '또는 회원정보로 인증',
      loginRemember: '아이디 저장',
      loginSubmit: '로그인',
      loginPassword: '비밀번호',
      loginEmail: '이메일',
      'login_error_email': '아이디 또는 비밀번호가 올바르지 않습니다.',
      'login_error_password': '아이디 또는 비밀번호가 올바르지 않습니다.',
      navigationHome: '홈',
      naviationSearchPlaceholder: '회사 / 모델 / 시리얼',
      naviationWelcome: '님 환영합니다!',
      naviationLogout: '로그아웃',
      sidebarSummary: '요약',
      sidebarPrinters: '프린터',
      sidebarCustomers: '고객',
      sidebarNewPrinters: '신규 프린터',
      sidebarWaitingPrinters: '대기 프린터',
      sidebargUsers: '사용자',
      sidebarSettings: '설정',
      sidebarNotices: '공지사항',
      sidebarDataProcess: '데이터 처리 이력',
      sidebarSearchHistory:'검색 이력',
      sidebarModel:'모델',
      sidebarGroupManagement:'그룹 관리',
      sidebarPrinterSearch:'프린터 검색',
      sidebarAdministrators:'관리자',
      sidebarContact: '문의',
      settingsTitle: '설정',
      settingsWarningDuration: '기본 경고 기준(일):사용량 정보 없음',
      settingsShortTime: '사용량 급증 기준(장):직전일 비교',
      settingsNoUsage: '사용량 변동 없는 기간(일):사용량 없음(누적)',
      settingsCompletelyDelete: '프린터 자동 삭제(일):완전 삭제',
      settingsDefaultSenderEmail: '기본 발신자 이메일',
      settingsAdditionalSenderEmail: '추가 발신자 이메일',
      settingsCompanyName: '회사명',
      settingsSave: '저장',
      settingsCancel: '취소',
      'dashboardAll':'전체',
      'dashboardNormal':'정상',
      'dashboardCaution':'주의',
      'dashboardCheck':'점검',
      'dashboardStatus':'상태',
      'dashboardBookmarks':'즐겨찾기',
      'dashboardThere is no favorite material':'즐겨찾기 자료가 없습니다.',
      'dashboardContract status':'계약기간 현황',
      'dashboardDevice name':'프린터 이름',
      'dashboardSerial Number':'시리얼',
      'dashboardLocation':'위치',
      'dashboardCustomer Name':'고객명',
      'dashboardStart date':'계약 시작',
      'dashboardEnd date':'계약 종료',
      'dashboardOption list':'타임라인',
      'dashboardAAll':'전체',
      'dashboardToner/Ink':'토너/잉크',
      'dashboardDrum':'드럼',
      'dashboardOthers':'기타소모품',
      'dashboardDevice':'프린터 에러',
      'dashboardTray':'트레이 관련 에러',
      'dashboardNo Paper':'용지 없음',
      'dashboardAdf':'ADF 관련 에러',
      'dashboardNot Defined':'기타 정의 되지 않은 프린터 에러',
      'dashboardSelect type':'유형 선택',
      'dashboardDate time':'처리일시',
      'dashboardKind':'토너/잉크',
      'dashboardEPSOFT':'고객명',
      'dashboardPrinter name':'프린터 이름',
      'dashboardNote':'설명 ',
      'dashboardType':'유형',
      'dashboardCustomer name':'고객명',
      'dashboardClose':'닫기',
      'dashboardSelect':'선택',
      'printerEquipment list':'프린터 리스트',
      'printerHome':'홈',
      'printerAll':'전체',
      'printernormal':'정상',
      'printercaution':'주의',
      'printercheck':'점검',
      'printerExcel':'엑셀',
      'printerToday':'오늘',
      'printercustomer':'고객',
      'printerModel':'기종',
      'printerLast update date':'최종갱신일시',
      'printerTotal count':'총장수',
      'printerDelta':'변화',
      'printerColour count':'컬러',
      'printerMono':'흑백',
      'printerStatus':'상태',
      'printerDellTa':'변화량',
      'printerBack page':'이전 페이지',
      'printerNext page':'다음 페이지',
      'printerPage':'페이지',
      'printerGun':'총',
      'printersConsumables':'소모품',
      'newPrinterNew printer':'신규 프린터',
      'newPrinterHome':'홈',
      'newPrinterRegistered date':'등록일시',
      'newPrinterAction':'조치',
      'newPrinterWaiting':'대기',
      'newPrinterAssignment':'할당',
      'newPrinterdelete':'삭제',
      'newPrinterConfirm deletion':'삭제 확인',
      'newPrinterAre you sure you want to delete it?':'정말로 삭제하시겠습니까?',
      'newPrinterclose':'닫기',
      'newPrinterWaiting reason':'대기 사유',
      'newPrinterStandby':'대기 전환',
      'newPrinterNote':'대기 사유',
      'usersemail':'이메일',
      'usersName':'이름',
      'usersJoin date':'가입일시',
      'usersStatus':'상태',
      'usersUser registration':'사용자 등록',
      'usersEmail Address':'이메일 주소',
      'usersConfirm Email Address':'이메일 주소 확인',
      'usersMobile Number':'휴대전화',
      'usersAdd':'추가',
      'usersEquipment deletion rights':'프린터 삭제 권한',
      'settingSettings':'설정',
      'settingWarning duration(day)':'기본 경고 기준(일):사용량 정보 없음',
      'settingHigh usage in short time':'사용량 급증 기준(장):직전일 비교',
      'settingNo usage in days':'사용량 변동 없는 기간(일):사용량 없음(누적)',
      'settingCompletely delete printers(days)':'프린터 자동 삭제(일):완전 삭제',
      'settingDefault sender email':'기본 발신자 이메일',
      'settingAditional sender email':'추가 발신자 이메일',
      'settingCompany name':'회사이름',
      'settingSave':'저장',
      'settingcancel':'취소',
      'noticeNotice':'공지사항',
      'noticeWriter':'작성자',
      'noticeContents':'내용',
      'noticeRegistered date':'등록일시',
      'processData/Email process history':'데이터 처리 이력',
      'processSearch':'검색',
      'processDate':'처리일시',
      'processNo':'번호',
      'processSearchDate':'검색일',
      'processRegistration':'등록 파일/IP 범위',
      'processNormalDetected':'정상',
      'processAbnormalDetected':'비정상',
      'processNotDetected':'없음',
      'processSearchBtn':'검색',
      'processStatus':'상태',
      'processSearchResult':'검색 결과',
      'processIpAddress':'IP',
      'processEndIp':'끝 IP',
      'processStartIp':'시작 IP',
      "processagent":'에이전트',
      'processSerialNumber':'시리얼 번호',
      'processPrinterModel':'프린터 모델',
      'processIp':'IP',
      'processHostName':'호스트 이름',
      'processRegisterPrinter':'프린터 등록',
      'processDepartmentName':'부서',
      'processLocation':'위치',
      'processSelect':'선택',
      'processPrintersDetail':'세부 정보',
      'processMemo':'메모',
      'processEndDate':'종료일',
      'processStartDate':'시작일',
      'processContract':'계약',
      'processPrinterinformation':'프린터 정보',
      'processDeleteBtn':'삭제',
      'processRegisterBtn':'등록',
      'processType':'구분',
      'processModelUsageThreshold':'모델별 사용량 임계치',
      'processModelConsumableThreshold':'모델별 소모품 임계값',
      'processRegistrationDate':'등록일',
      'processRemark':'주석',
      'processUpperDepartment':'상위 부서',
      'processExport':'내보내기',
      'processImport':'가져오기',
      'processDelete':'삭제',
      'processAdd':'추가',
      'processSearch':'찾기:',
      'processEntries':'항목',
      'processShow':'보기',
      'processTree':'트리',
      'processDepartment':'부서',
      'processGroup':'그룹',
      'processMax':'최대',
      'processMin':'최소',
      'processOther':'기타',
      'processTransfer':'전사벨트',
      'processOPC':'OPC',
      'processDeveloper':'현상기',
      'processFuser':'퓨저',
      'processToner':'토너',
      'processClient':'클라이언트',
      'processReduced-Size':'사이즈 조정',
      'processFull-Size':'큰 사이즈',
      'processImage':'이미지',
      'processDescription':'설명',
      'processDriver':'드라이버',
      'processModelType':'모델 구분',
      'processSupplyType':'소모품 구분',
      'processDownloadDriver':'드라이버 다운로드',
      'processNoOfPriners':'현재 프린터 수',
      'processManufacturer':'제조사',
      'processName':'이름',
      'processMessage':'메시지',
      'processCustomer name':'고객명 ',
      'processDisplay name':"이름 표시하기",
      'processPrinter name':'프린터',
      'processPartner name':'파트너명',
      'summarySummary':'요약',
      'summaryModified':'수정',
      'summarydelete':'삭제',
      'summaryHome':'홈',
      'summaryEquipment summary':'프린터 요약',
      'summaryExpendables':'소모품',
      'summaryDetail':'상세',
      'summaryUsage page':'사용 페이지',
      'summaryPaper size':'용지크기',
      'summarycolor':'칼라',
      'summarytype':'유형',
      'summaryboth sides':'양면',
      'summaryLong live':'장수',
      'summaryChange':'변화량',
      'summarytray':'트레이',
      'summaryVolume':'용량',
      'summaryPaper type':'용지유형',
      'summarystate':'상태',
      'summaryevent':'이벤트',
      'summarymemo':'메모',
      'summaryreport':'리포트',
      'summaryConfirm deletion':'삭제 확인',
      'summaryAre you sure you want to delete it':'정말로 삭제하시겠습니까?',
      'summaryclose':'닫기',
      'summaryDevice list':'프린터 리스트',
      'summaryModel':'기종',
      'summaryLast update date':'최종갱신일시 ',
      'summaryusage':'사용량',
      'summaryPage':'페이지',
      'summaryBack page':'이전',
      'summaryNext page':'다음',
      'summaryEquipment modification':'프린터 수정',
      'summarycompany name':'업체명',
      'summaryAdd':'추가',
      'summaryPlaceholder':'100자 이상 입력할 수 있습니다',
      'summarySearch by':'(으)로 검색합니다.',
      'summaryEquipment location':'위치',
      'summaryPrinter information':'프린터 정보',
      'summarySave':'저장',
      'summarycancel':'취소',
      'summaryFrom':'계약기간 시작',
      'summaryTo':'계약기간 종료',
      'summaryAdd company':'업체 추가',
      'summaryname':'이름',
      'summaryName the customer':'고객 이름 지정',
      'summaryTerm':'계약기간',
      'summaryBreakdown':'내역',
      'summaryContract details':'상세 검색',
      'contractFomrMemo':'계약메모',
      'summaryStart of contract':'계약시작',
      'summaryContract termination':'계약종료',
      'summaryDate of revision':'수정일시',
      'summaryEquipment screen':'프린터 화면',
      'summaryMemo':'메모',
      'summaryAdd a note':'메모 추가',
      'summaryYou cannot enter more than 100 characters':'100자 이상 입력할 수 없습니다.',
      'summaryAdvanced Search':'상세검색',
      'summaryConsumable details and replacement history':'소모품 상세 및 교체내역',
      'summaryPages left (approximately)':'남은 페이지(대략)',
      'summarySerial Number':'시리얼',
      'summaryPrinted page':'인쇄한 페이지',
      'summaryInitial installation date':'최초 설치 날짜',
      'summaryLast use date':'최종 사용 날짜',
      'summaryReplacement history':'교체 내역',
      'summaryReplacement_history_table':'지정 안됨',
      'summaryToner':'토너',
      'summarydrum':'드럼',
      'summaryEtc':'기타',
      'User information':'사용자 정보',
      'userss{item}':'승인',
      'users deletion rights':'프린터 삭제 권한',
      'customerCustomer modification':'고객 수정',
      'customerCustomer equipment list':'고객 프린터 리스트',
      'customerrNo of device per customer':'고객별 프린터 수',
      'customerrHome':'홈',
      'customerrCustomer Name':'고객명',
      'customerrDevice count':'프린터 수',
      'userPageUsage page':'사용 페이지',
      'userPageequipment':'프린터',
      'userPagestart':'시작',
      'userPageEnd':'종료',
      'userPageSave':'저장',
      'userPageSend report mail':'리포트 메일 전송',
      'userPageexport':'내려받기',
      'userPageDetailed report search':'리포트 상세 검색',
      'userPageExcel':'엑셀',
      'userPageList':'목록',
      'userPageglance':'일별',
      'userPagemonthly':'월별',
      'userPagedate':'연별',
      'userPageGray-scale':'흑백',
      'userPageall':'전체',
      'userPageBlack and white':'흑백',
      'userPagecolor':'컬러',
      'userPageSum':'합계',
      'oktalkTitle': 'OK톡',
      "Update Profile":'프로필 업데이트',
      Edit:"수정",
      "chatNoMemo": '메모 없음',
      "noDataFound": "데이터가 없습니다.",
      "searchCompany": "회사",
      "breakDown": '내역',
      "chatYesterday": "어제",
      "contractStart": "계약시작	",
      "contractTermination": "계약종료",
      "contractMemo": "메모",
      "contractDate": "등록일시",
      "contractVersion": "수정일시",
      "contractHeader": "계약 내역",
      "summaryPrinterContract": "계약",
      "selectPrinterChat": "프린터를 선택하면 메모를 볼 수 있습니다.",
      "chatImagePreview": "미리보기",
      "printersReportFrom": "시작",
      "printersReportTo": "종료",
      "noticeNoMoreDisplay": "오늘은 그만보기",
      "noticeReadMore": "자세히 보기",
      "dashboardLabel": "대시보드",
      "dashboardRemaingDate": "남은 기간(일)",
      "timelineDate": "처리 시간",
      "userEditApprove": "승인",
      "popupSaved": "저장하였습니다.",
      "popupSent": "전송되었습니다.",
      "popupCreated": "새로 생성하였습니다.",
      "popupDeleted": "삭제하였습니다.",
      "popupApproved": "승인되었습니다.",
      "popupEdited": "수정하였습니다.",
      "popupSomethingWrong": "잠시 문제가 발생했습니다. 동일한 문제가 지속되면 관리자에게 문의하여 주세요.",
      "defaultSelectPrinterChat":"프린터를 선택하세요.",
      "typeMessageHereHint":"여기에 메시지를 입력하세요.",
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'ko'],
    detection: {
      order: ['navigator', 'queryString', 'cookie'],
      cache: ['cookie']
    },
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;