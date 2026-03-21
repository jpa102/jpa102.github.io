// globaldata_online.js
// this file just hosts the translation texts, variables for things like waiting times, and others

//	INTERNAL VARIABLES
//	numbers are in milliseconds, these are for waiting times
var __faketube_aplyfavstebgclr = 301;
var __faketube_delaypagems = 180;
var __faketube_delaytrnsltnsms = 50;
var __faketube_intrnt_btm_notif_apr_ms = 1000;
var __faketube_intrnt_btm_notif_clpse_ms = 4067;
var __faketube_page_location = "HOME_PAGE";



/*
	main object for global data
	by default, these are either 0 or no data inside them
*/
var global_data = {
	_watch_page_strings: {
		_standard: {
			faketube_title_text: "FakeTube"
		},
		_stored_vars: {
			about_text_inject: "About",
			general_text_inject: "General",
			family_center_text_inject: "Family center",
			notifications_text_inject: "Notifications",
			settings_text_inject: "Settings",
			appearance_text_inject: "Appearance",
			light_mode_text_inject: "Light theme",
			dark_mode_text_inject: "Dark theme",
			darker_dark_mode_text_inject: "Dark theme (darker)",
			black_hole_theme_text_inject: "Black hole theme",
			cancel_text_inject: "Cancel",
			back_online_text_inject: "Back online",
			no_internet_connection_text_inject: "No internet connection",
			check_your_internet_connection_text_inject: "You're offline. Check your connection."
		},
		ja: {
			back_online_text: "オンラインに復帰しました",
			no_internet_connection_text: "インターネットに接続されていません",
			check_your_internet_connection_text: "現在オフラインです。接続を確認してください。",
			cancel_text: "キャンセル",
			home_text: "ホーム",
			explore_text: "探索",
			shorts_text: "ショート",
			subscriptions_text: "登録チャンネル",
			library_text: "ライブラリ",
			getting_channel_name_text: "チャンネル名を取得しています。。。",
			getting_video_title_text: "動画のタイトルを取得しています。。。",
			nan_subscribers_text: "チャンネル登録者数 NaN人",
			likes_text: "高評価",
			dislikes_text: "低評価",
			chat_text: "チャット",
			share_text: "共有",
			create_text: "作成",
			remix_text: "リミックス",
			stop_ads_text: "広告の停止",
			clip_text: "クリップ",
			save_text: "保存",
			saved_text: "保存済み",
			download_text: "オフライン",
			downloaded_text: "一時保存済",
			report_text: "報告",
			subscribe_text: "チャンネル登録",
			comment_header_text: "コメント",
			add_a_comment_text: "コメントする...",
			likes_title_text: "高評価数",
			dislikes_title_text: "低評価数",
			view_count_title_text: "回視聴数",
			description_header_text: "概要",
			transcripts_header_text: "動画の関連情報",
			show_transcripts_text: "文字起こしを表示",
			transcript_text_header_text: "文字起こし",
			transcript_description_text: "文字起こしを使って説明する",
			channel_videos_button_text: "動画",
			channel_about_button_text: "概要",
			try_searching_h2_text: "まずは検索してみましょう",
			try_searching_h4_parag_text: "おすすめ動画を表示するには、まず動画を視聴しましょう。",
			input_video_id_h2_text: "または、ここに動画のIDを入力してください",
			input_video_id_h4_parag_text: `YouTubeリンクから動画IDを取得する(次のリンク<code><u>?v=</u></code>)`,
			input_video_id_box_hint_text: "例のIDはdQw4w9WgXcQです",
			input_video_id_button_gotowatch_text: "見る",
			sign_in_promotion_header_text: "FakeTube をもっと楽しもう",
			sign_in_promotion_body_text: "ログインすると、動画のアップロードや保存、コメントの投稿などができるようになります",
			login_text: "ログイン",
			settings_text: "設定",
			help_and_feedback_text: "ヘルプとフィードバック",
			privacy_policy_and_tos_text: "プライバシー ポリシー • 利用規約",
			family_center_text: "ファミリー センター",
			general_text: "全般",
			data_saving_text: "データの節約",
			autoplay_text: "自動再生",
			video_quality_prefs_text: "動画の画質設定",
			background_and_downloads_text: "バックグラウンドとオフライン",
			manage_all_history_text: "すべての履歴を管理",
			privacy_text: "プライバシー",
			try_experimental_new_features_text: "試験運用版の新機能を試す",
			payments_and_memberships_text: "購入とメンバシップ",
			billing_and_payments_text: "請求とお支払い",
			watch_on_tv_text: "テレビで見る",
			notifications_text: "通知",
			connected_apps_text: "接続済みのアプリ",
			captions_text: "字幕",
			accessibility_text: "ユーザー補助",
			about_text: "アプリに関する情報", // in the original youtube set to japanese, it roughly says "app and info"
			appearance_text: "デザイン",
			appearance_desc_text: "ライト / ダーク モードの設定を選択します",
			app_version_text: "アプリのバージョン",
			faketube_author_info_text: "FakeTube は @jpa102 のプロジェクトです"
		}
	}
}
