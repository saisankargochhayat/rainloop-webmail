
/* global RL_COMMUNITY */

import {addSettingsViewModel} from 'Knoin/Knoin';
import {runSettingsViewModelHooks} from 'Common/Plugins';

import {AbstractSettingsScreen} from 'Screen/AbstractSettings';
import App from 'App/Admin';

class SettingsAdminScreen extends AbstractSettingsScreen
{
	constructor()
	{
		super([
			require('View/Admin/Settings/Menu'),
			require('View/Admin/Settings/Pane')
		]);
	}

	/**
	 * @param {Function=} fCallback = null
	 */
	setupSettings(fCallback = null) {
		addSettingsViewModel(require('Settings/Admin/General'),
			'AdminSettingsGeneral', 'TABS_LABELS/LABEL_GENERAL_NAME', 'general', true);

		addSettingsViewModel(require('Settings/Admin/Login'),
			'AdminSettingsLogin', 'TABS_LABELS/LABEL_LOGIN_NAME', 'login');

		if (RL_COMMUNITY)
		{
			addSettingsViewModel(require('Settings/Admin/Branding'),
				'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
		}
		else
		{
			addSettingsViewModel(require('Settings/Admin/Prem/Branding'),
				'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
		}

		addSettingsViewModel(require('Settings/Admin/Contacts'),
			'AdminSettingsContacts', 'TABS_LABELS/LABEL_CONTACTS_NAME', 'contacts');

		addSettingsViewModel(require('Settings/Admin/Domains'),
			'AdminSettingsDomains', 'TABS_LABELS/LABEL_DOMAINS_NAME', 'domains');

		addSettingsViewModel(require('Settings/Admin/Security'),
			'AdminSettingsSecurity', 'TABS_LABELS/LABEL_SECURITY_NAME', 'security');

		addSettingsViewModel(require('Settings/Admin/Social'),
			'AdminSettingsSocial', 'TABS_LABELS/LABEL_INTEGRATION_NAME', 'integrations');

		addSettingsViewModel(require('Settings/Admin/Plugins'),
			'AdminSettingsPlugins', 'TABS_LABELS/LABEL_PLUGINS_NAME', 'plugins');

		addSettingsViewModel(require('Settings/Admin/Packages'),
			'AdminSettingsPackages', 'TABS_LABELS/LABEL_PACKAGES_NAME', 'packages');

		if (!RL_COMMUNITY)
		{
			addSettingsViewModel(require('Settings/Admin/Prem/Licensing'),
				'AdminSettingsLicensing', 'TABS_LABELS/LABEL_LICENSING_NAME', 'licensing');
		}

		addSettingsViewModel(require('Settings/Admin/About'),
			'AdminSettingsAbout', 'TABS_LABELS/LABEL_ABOUT_NAME', 'about');

		runSettingsViewModelHooks(true);

		if (fCallback)
		{
			fCallback();
		}
	}

	onShow() {
		App.setWindowTitle('');
	}
}

export {SettingsAdminScreen, SettingsAdminScreen as default};
