import React from 'react';
import { Button } from 'antd';
import styles from './ErrorPage.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <Icon />
        <div className={styles.borderBottom} />
      </div>
      <h1 className={styles.title}> {t('errorPage.title')}</h1>
      <p className={styles.text}>{t('errorPage.subtitle')}</p>
      <Button
        onClick={() => navigate('/')}
        className={styles.button}
        shape="round"
        type="primary"
        size="large"
      >
        {t('errorPage.back')}
      </Button>
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="216px"
      viewBox="0 0 273 216"
      version="1.1"
    >
      <defs>
        <linearGradient x1="100%" y1="50%" x2="-2.22044605e-14%" y2="50%" id="linearGradient-1">
          <stop stop-color="#9AFF00" offset="0%" />
          <stop stop-color="#3FC2F6" offset="30.7801573%" />
          <stop stop-color="#000096" offset="100%" />
        </linearGradient>
      </defs>
      <g id=" jjjj-Flow-EN" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="Desktop---404" transform="translate(-584.000000, -128.000000)">
          <g
            id="Icons,-Logos-&amp;-Illustrations-/-Illustrations-/-State-/-Desktop-/-Page-Not-Found"
            transform="translate(584.000000, 128.000000)"
          >
            <g id="Group">
              <path
                d="M273,135.926842 C272.994723,80.4130922 239.093818,30.4804435 187.364591,9.79451773 C135.635365,-10.891408 76.4731694,1.8263716 37.9179787,41.920254 C-0.637211988,82.0141364 -10.8374608,141.426974 12.1516489,192 L260.851593,192 C268.875178,174.387274 273.017543,155.267353 273,135.926842 Z"
                id="Shape-Copy-27"
                fill="#E0E0F2"
                fillRule="nonzero"
                opacity="0.349560692"
              />
              <line
                x1="3"
                y1="192"
                x2="270"
                y2="192"
                id="Shape-Copy-28"
                stroke="url(#linearGradient-1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect id="Rectangle" fill="#FFFFFF" x="82.5" y="171" width="108" height="27" />
              <path
                d="M137.25,55.4594595 C154.451058,55.4594595 170.023693,62.4315657 181.296064,73.7039364 C192.568434,84.9763071 199.540541,100.548942 199.540541,117.75 L199.540541,117.75 L199.540541,204.046875 C199.540541,206.944621 198.365997,209.568037 196.467017,211.467017 C194.568037,213.365997 191.944621,214.540541 189.046875,214.540541 L189.046875,214.540541 L185.726472,214.540541 C183.745631,214.540541 181.952315,213.737646 180.65421,212.43954 C179.356104,211.141435 178.553209,209.348119 178.553209,207.367278 L178.553209,207.367278 L178.553209,206.389792 C178.553209,203.872838 177.533012,201.594164 175.883577,199.944728 C174.234141,198.295293 171.955467,197.275096 169.438513,197.275096 C166.92156,197.275096 164.642886,198.295293 162.99345,199.944728 C161.344015,201.594164 160.323817,203.872838 160.323817,206.389792 L160.323817,206.389792 L160.323817,207.367278 C160.323817,209.348119 159.520923,211.141435 158.222817,212.43954 C156.924712,213.737646 155.131396,214.540541 153.150555,214.540541 L153.150555,214.540541 L149.516638,214.540541 C146.532318,214.540541 143.830524,213.330906 141.874809,211.375191 C139.919094,209.419476 138.709459,206.717682 138.709459,203.733362 L138.709459,203.733362 L138.709459,189.254522 C138.709459,186.650993 137.654171,184.293941 135.948001,182.587771 C134.241831,180.8816 131.884778,179.826312 129.28125,179.826312 C126.677722,179.826312 124.320669,180.8816 122.614499,182.587771 C120.908329,184.293941 119.853041,186.650993 119.853041,189.254522 L119.853041,189.254522 L119.853041,206.039062 C119.853041,208.386681 118.90148,210.51205 117.363015,212.050515 C115.82455,213.58898 113.699181,214.540541 111.351562,214.540541 C109.003944,214.540541 106.878575,213.58898 105.34011,212.050515 C103.801645,210.51205 102.850084,208.386681 102.850084,206.039062 L102.850084,206.039062 L102.850084,197.204072 C102.850084,195.150672 102.017779,193.291666 100.672124,191.946011 C99.3264688,190.600356 97.4674633,189.76805 95.4140625,189.76805 C93.3606617,189.76805 91.5016562,190.600356 90.1560009,191.946011 C88.8103456,193.291666 87.9780405,195.150672 87.9780405,197.204072 L87.9780405,197.204072 L87.9780405,200.115734 C87.9780405,201.913225 87.2494634,203.540547 86.0715135,204.718497 C84.8935636,205.896447 83.2662409,206.625024 81.46875,206.625024 C79.6712591,206.625024 78.0439364,205.896447 76.8659865,204.718497 C75.6880366,203.540547 74.9594595,201.913225 74.9594595,200.115734 L74.9594595,200.115734 L74.9594595,117.75 C74.9594595,100.548942 81.9315657,84.9763071 93.2039364,73.7039364 C104.476307,62.4315657 120.048942,55.4594595 137.25,55.4594595 Z"
                id="Rectangle"
                stroke="#000096"
                stroke-width="2.91891892"
                fill="#FFFFFF"
              />
              <circle id="Oval" fill="#00007F" cx="111.75" cy="107.25" r="8.25" />
              <circle id="Oval-Copy-2" fill="#00007F" cx="162.75" cy="107.25" r="8.25" />
              <line
                x1="126.75"
                y1="149.303447"
                x2="147.75"
                y2="149.303447"
                id="Path-5"
                stroke="#00007F"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            <g id="Group-13" transform="translate(73.500000, 54.000000)" />
          </g>
        </g>
      </g>
    </svg>
  );
};
