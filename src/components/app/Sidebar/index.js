import React from 'react';
import { Link, IndexLink } from 'react-router';
import { translate } from 'react-i18next';
import s from './styles.css';
import { namedRoutes } from '../../../routes';
import Globals from '../../../locales/globals';
import Button from '../../common/Button';

const Sidebar = (props) => {
  const {
    t,
    closeSidebar,
    kyc,
    logout
  } = props;

  return (
    <div className={s.sidebar}>
      <div className={s.close}>
        <button onClick={() => closeSidebar()}>
          <img src={require('../../../assets/images/icons/close.svg')} />
        </button>
      </div>

      <div className={s.logo}>
        <img src={require('../../../assets/images/logo_dark.png')} alt={t('companyName')}/>
      </div>

      <div className={s.navigation}>
        <IndexLink
          onClick={() => closeSidebar()}
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.dashboard}>{t('dashboard')}</IndexLink>

        <Link
          onClick={() => closeSidebar()}
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.transactions}>{t('transactions')}</Link>

        <Link
          onClick={() => closeSidebar()}
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.referrals}>{t('partnerProgram')}</Link>

        {/* <Link
          onClick={() => closeSidebar()}
          className={s.disabled}
          activeClassName={s.active}
          to={namedRoutes.sendTokens}>{t('sendTokens')}</Link> */}

        <Link
          onClick={() => closeSidebar()}
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.account}>{t('account')}</Link>

        {!kyc
          ? <Link
            onClick={() => closeSidebar()}
            className={s.link}
            activeClassName={s.active}
            to={namedRoutes.verification}>{t('verification')}</Link>
          : null}
      </div>

      <div className={s.signOut}>
        <Button
          type="button"
          size="small"
          styl="secondary"
          onClick={() => logout()}>
          {t('signOut')}
        </Button>
      </div>

      <div className={s.socials}>
        <a href={Globals.telegramLink} target="_blank">
          <img src={require('../../../assets/images/social-icons/telegram.svg')} />
        </a>
        <a href={Globals.facebookLink} target="_blank">
          <img src={require('../../../assets/images/social-icons/facebook.svg')} />
        </a>
        <a href={Globals.twitterLink} target="_blank">
          <img src={require('../../../assets/images/social-icons/twitter.svg')} />
        </a>
      </div>
    </div>
  );
};

const TranslatedComponent = translate('app')(Sidebar);

export default TranslatedComponent;
