// Generated by RPG Maker.
// Do not edit this file directly.

// Nope, I don't mind this warning. I'm not going to edit this file directly. haha
// I added NRP_ChangeCharacterSpeed in last line.
var $plugins =
[
{"name":"FOSSIL","status":true,"description":"Fossil is an interoperability layer for RMMZ, designed to make MV plugins work in MZ. \r\nSo far, we support over 300 plugins.  You can help!","parameters":{}},
{"name":"H2A_SkipTitle","status":false,"description":"タイトルをスキップします","parameters":{"mode":"new"}},
{"name":"PluginCommandMVInScriptArea","status":true,"description":"スクリプト欄でMV形式プラグインコマンドを実行","parameters":{"commands":"[\"skit\",\"スキット\",\"particle\",\"パーティクル\"]"}},
{"name":"TRP_ParticleMZ_Preset","status":true,"description":"パーティクルプリセットデータ","parameters":{}},
{"name":"TRP_ParticleMZ_List","status":true,"description":"自作パーティクル設定の一覧","parameters":{}},
{"name":"TRP_ParticleMZ","status":true,"description":"※TRP_ParticleMZ_Presetより下に配置","parameters":{"importLibrary":"true","importFilter":"true","systemParticles":"[\"particle set click click\",\"particle set click2 click\"]","commandName":"particle,パーティクル","keepPictureOrder":"false","walkOffset":"16","dashOffset":"16","categoryClear":"==============================","clearCharacterOnMapChange":"true","clearPartyOnMapChange":"true","clearScreenOnMapChange":"true","clearBattleScreenOnEnd":"false","clearBattleCharaOnEnd":"true","categoryPerformance":"==============================","regionMargin":"2","outsideMargin":"6","maxParticles":"100000","categoryConflict":"==============================","disableState":"false","disableSkill":"false","disableRoute":"false","cacheBeforeTerminate":"false","categorySenior":"==============================","sceneTypes":"[\"Scene_Menu-Scene_Save-Scene_Item-Scene_Equip-Scene_Actor-Scene_Skill-Scene_Status\",\"Scene_Title\",\"Scene_Load\",\"Scene_Options\",\"Scene_Shop\",\"Scene_Gameover\"]","noRewriteFunctions":"false","categoryDebug":"==============================","displayCount":"false","errorLog":"true","windowBugFix":"true"}},
{"name":"TRP_ParticleMZ_Editor","status":true,"description":"パーティクルデータの編集[開発用]","parameters":{"showGuide":"true","paramFontSize":"18","noColorCode":"false","buttonFontSize":"13","buttonWidth":"86","saveAsArray":"false","copyAsArray":"true","skipListCommand":"false"}},
{"name":"TRP_ParticleMZ_Group","status":true,"description":"グループ再生機能の有効化","parameters":{}},
{"name":"TRP_ParticleMZ_GroupEditor","status":true,"description":"グループ設定の編集[開発用]","parameters":{}},
{"name":"TRP_ParticleMZ_SubEmitter","status":true,"description":"サブエミッター機能の有効化","parameters":{}},
{"name":"TRP_DisplacementFilter","status":true,"description":"水中マップ用のゆらぎフィルター","parameters":{"usingFiles":"[\"img/system/DisplacementMap\",\"img/system/DisplacementMap2\"]"}},
{"name":"ChangeTileSize","status":true,"description":"48x48以外のグリッドサイズのマップを使用可能にします。","parameters":{"Tile Size":"48","Tileset Image Folder":"img/tilesets/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"CharacterFreeze","status":true,"description":"キャラクター停止プラグイン","parameters":{"停止スイッチID":"28","停止中ピクチャID":"0","停止中ピクチャ名":"","停止中BGM音量":"100"}},
{"name":"YEP_EventChasePlayer","status":true,"description":"プレイヤーが近づいた際に、イベントがプレイヤーを追いかけたり\nプレイヤーから逃げるアクションを取ります","parameters":{"Sight Lock":"300","See Player":"true","Alert Timer":"120","Alert Balloon":"1","Alert Sound":"Attack1","Alert Common Event":"0"}},
{"name":"CP_Large_Sprite_Fix","status":true,"description":"すり抜け可能タイル(★タイル)の下側に\n大きなスプライトが出現する際の問題点を解決します。","parameters":{"Terrain ID":"7","Large Followers":"No","Large Vehicles":"Yes"}},
{"name":"YED_Eventspassable","status":true,"description":"イベントもしくはフォロワーが他のイベントにヒットした際に、途中で停止してしまうことを防ぎます。","parameters":{}},
{"name":"YED_WordWrap","status":true,"description":"文章の改行機能を提供します。長文を適切な位置で改行します。","parameters":{"Break Word":"false"}},
{"name":"TDDP_MouseSystemEx","status":false,"description":"マウスカーソルのカスタム、メニューアイテムの\nハイライトなどを行います。詳しくはHelpをご覧ください。","parameters":{"---Custom Cursor---":"","Use Custom Cursor?":"false","Custom Cursor Image":"default.png","Custom Cursors Folder":"img/cursors/","---Auto Change Cursors---":"","Show Text Cursor":"","Transfer Cursor":"","Change Gold Cursor":"","Change Items Cursor":"","Change Weapons Cursor":"","Change Armors Cursor":"","---Auto Change Icons---":"","Show Text Icon":"","Transfer Icon":"","Change Gold Icon":"","Change Items Icon":"","Change Weapons Icon":"","Change Armors Icon":"","---Hover Select---":"","Highlight On Hover":"false","Hover SE Cooldown":"4","---Customizeable Notetags---":"","No Auto Cursor Notetag":"no_auto_cursor!","No Auto Icon Notetag":"no_auto_icon!","Click Notetag":"click_activate!","Hover Notetag":"hover_activate!","Leave Notetag":"leave_activate!","---Mouse Icons---":"","Hide Cursor":"false","Icon Offset X":"9","Icon Offset Y":"14","---Mouse Icon Tags---":"","Icon Tag 1":"quest: 191","Icon Tag 2":"chest: 210","Icon Tag 3":"door: 106","Icon Tag 4":"world_map: 190","Icon Tag 5":"potion: 176","Icon Tag 6":"poison: 177","Icon Tag 7":"four_leaf_clover: 182","Icon Tag 8":"notebook: 187","Icon Tag 9":"letter: 192","Icon Tag 10":"key: 195","Icon Tag 11":"key: 195","Icon Tag 12":"key: 195","Icon Tag 13":"key: 195","Icon Tag 14":"key: 195","Icon Tag 15":"key: 195"}},
{"name":"TDDP_PlayerTouchPassage","status":true,"description":"マウスもしくはタッチインプットの使用時、\nイベントタッチ後にもプレイヤーキャラクターが歩き続けます。","parameters":{}},
{"name":"CP_Star_Passability_Fix","status":true,"description":"★タイルに対して、4方向の通行指定が可能になります。","parameters":{}},
{"name":"No Autoshadow","status":true,"description":"ゲーム内で自動生成される影を非表示にします。","parameters":{}},
{"name":"category_plus","status":true,"description":"アイテムのカテゴリーを追加する","parameters":{}},
{"name":"Delusional Field","status":true,"description":"ロード失敗エラーのすり抜けプラグイン","parameters":{"テストプレー時無効":"true","Web版で無効":"false","無視種別":"3"}},
{"name":"PictureZIndex","status":true,"description":"ピクチャのZ-Index（重なり順序）を設定します。","parameters":{}},
{"name":"NUUN_Base","status":true,"description":"共通処理","parameters":{}},
{"name":"NUUN_MenuScreen_2","status":true,"description":"メニュー画面タイプ２","parameters":{"Setting":"------------------------------","MenuCols":"4","MenuRows":"1","CommandCols":"4","CommandRows":"2","WindowVisible":"true","ExpDisplayMode":"1","DecimalMode":"true","BackGroundSetting":"------------------------------","BackGroundImges":"","BackUiWidth1":"true","BackGroundImg":"","BackUiWidth":"true","StatusSetting":"------------------------------","StatusList":"[\"{\\\"DateSelect\\\":\\\"1\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"\\\",\\\"X_Position\\\":\\\"1\\\",\\\"Y_Position\\\":\\\"1\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"0\\\",\\\"Align\\\":\\\"'left'\\\",\\\"DetaEval\\\":\\\"\\\",\\\"paramUnit\\\":\\\"\\\",\\\"Decimal\\\":\\\"0\\\",\\\"FontSize\\\":\\\"0\\\",\\\"GaugeSetting\\\":\\\"------------------------------\\\",\\\"GaugeID\\\":\\\"\\\",\\\"GaugeHeight\\\":\\\"12\\\",\\\"DetaEval2\\\":\\\"\\\",\\\"Color1\\\":\\\"0\\\",\\\"Color2\\\":\\\"0\\\"}\"]","HPGaugeWidth":"200","MPGaugeWidth":"200","TPGaugeWidth":"200","Expgauge":"------------------------------","ExpGaugeWidth":"200","ExpGaugeColor1":"17","ExpGaugeColor2":"6","LabelShow":"false","EXPDecimal":"2","InfoSetting":"------------------------------","HelpList":"[\"{\\\"HelpCommandName\\\":\\\"'アイテム'\\\",\\\"HelpCommandText\\\":\\\"所持しているアイテムを表示します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'スキル'\\\",\\\"HelpCommandText\\\":\\\"スキルを表示します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'装備'\\\",\\\"HelpCommandText\\\":\\\"装備を変更します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'ステータス'\\\",\\\"HelpCommandText\\\":\\\"アクターのステータスを表示します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'オプション'\\\",\\\"HelpCommandText\\\":\\\"ゲームの設定を変更します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'並び替え'\\\",\\\"HelpCommandText\\\":\\\"メンバーの並び替えを行います。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'セーブ'\\\",\\\"HelpCommandText\\\":\\\"データを記録します。\\\"}\",\"{\\\"HelpCommandName\\\":\\\"'ゲーム終了'\\\",\\\"HelpCommandText\\\":\\\"ゲームを終了します。\\\"}\"]","InfoHeaderSetting1":"------------------------------","InfoHeaderShow1":"false","InfoHeaderList1":"[]","InfoHeaderCols1":"3","InfoHeaderRows1":"1","InfoHeaderFontSize1":"0","InfoHeaderSetting2":"------------------------------","InfoHeaderShow2":"false","InfoHeaderList2":"[]","InfoHeaderCols2":"3","InfoHeaderRows2":"1","InfoHeaderFontSize2":"0","InfoFooterSetting":"------------------------------","InfoFooterShow":"false","InfoList":"[\"{\\\"DateSelect\\\":\\\"3\\\",\\\"X_Position\\\":\\\"1\\\",\\\"Y_Position\\\":\\\"1\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"0\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"現在地\\\",\\\"DetaEval\\\":\\\"\\\",\\\"Align\\\":\\\"'right'\\\",\\\"InfoIcon\\\":\\\"0\\\"}\",\"{\\\"DateSelect\\\":\\\"1\\\",\\\"X_Position\\\":\\\"2\\\",\\\"Y_Position\\\":\\\"1\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"0\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"プレイ時間\\\",\\\"DetaEval\\\":\\\"\\\",\\\"Align\\\":\\\"'right'\\\",\\\"InfoIcon\\\":\\\"0\\\"}\",\"{\\\"DateSelect\\\":\\\"6\\\",\\\"X_Position\\\":\\\"1\\\",\\\"Y_Position\\\":\\\"2\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"0\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"\\\",\\\"DetaEval\\\":\\\"\\\",\\\"Align\\\":\\\"'right'\\\",\\\"InfoIcon\\\":\\\"0\\\"}\"]","InfoCols":"2","InfoRows":"2","InfoFontSize":"-2","InfoSideSetting":"------------------------------","InfoSideShow":"true","InfoSideList":"[\"{\\\"DateSelect\\\":\\\"5\\\",\\\"X_Position\\\":\\\"1\\\",\\\"Y_Position\\\":\\\"1\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"0\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"所持金\\\",\\\"DetaEval\\\":\\\"\\\",\\\"Align\\\":\\\"'left'\\\",\\\"InfoIcon\\\":\\\"0\\\"}\",\"{\\\"DateSelect\\\":\\\"2\\\",\\\"X_Position\\\":\\\"1\\\",\\\"Y_Position\\\":\\\"2\\\",\\\"X_Coordinate\\\":\\\"0\\\",\\\"Y_Coordinate\\\":\\\"0\\\",\\\"ItemWidth\\\":\\\"0\\\",\\\"SystemItemWidth\\\":\\\"1\\\",\\\"NameColor\\\":\\\"16\\\",\\\"ParamName\\\":\\\"\\\",\\\"DetaEval\\\":\\\"\\\",\\\"Align\\\":\\\"'right'\\\",\\\"InfoIcon\\\":\\\"0\\\"}\"]","InfoSideFontSize":"0","ActorSetting":"------------------------------","GraphicMode":"'img'","ActorsImgList":"[\"{\\\"actorId\\\":\\\"1\\\",\\\"GraphicMode\\\":\\\"'img'\\\",\\\"ActorImg\\\":\\\"menu/suzu_1\\\",\\\"FaceImg\\\":\\\"\\\",\\\"FaceIndex\\\":\\\"-1\\\",\\\"Actor_X\\\":\\\"0\\\",\\\"Actor_Y\\\":\\\"0\\\",\\\"Img_SX\\\":\\\"80\\\",\\\"Img_SY\\\":\\\"0\\\",\\\"Actor_Scale\\\":\\\"100\\\",\\\"ActorBackImg\\\":\\\"\\\",\\\"ActorFrontImg\\\":\\\"\\\"}\",\"{\\\"actorId\\\":\\\"2\\\",\\\"GraphicMode\\\":\\\"'img'\\\",\\\"ActorImg\\\":\\\"menu/ruru_1\\\",\\\"FaceImg\\\":\\\"\\\",\\\"FaceIndex\\\":\\\"-1\\\",\\\"Actor_X\\\":\\\"0\\\",\\\"Actor_Y\\\":\\\"0\\\",\\\"Img_SX\\\":\\\"80\\\",\\\"Img_SY\\\":\\\"-30\\\",\\\"Actor_Scale\\\":\\\"90\\\",\\\"ActorBackImg\\\":\\\"\\\",\\\"ActorFrontImg\\\":\\\"\\\"}\",\"{\\\"actorId\\\":\\\"3\\\",\\\"GraphicMode\\\":\\\"'img'\\\",\\\"ActorImg\\\":\\\"menu/chris_1\\\",\\\"FaceImg\\\":\\\"\\\",\\\"FaceIndex\\\":\\\"-1\\\",\\\"Actor_X\\\":\\\"0\\\",\\\"Actor_Y\\\":\\\"0\\\",\\\"Img_SX\\\":\\\"80\\\",\\\"Img_SY\\\":\\\"-35\\\",\\\"Actor_Scale\\\":\\\"90\\\",\\\"ActorBackImg\\\":\\\"\\\",\\\"ActorFrontImg\\\":\\\"\\\"}\",\"{\\\"actorId\\\":\\\"4\\\",\\\"GraphicMode\\\":\\\"'img'\\\",\\\"ActorImg\\\":\\\"menu/retoro_1\\\",\\\"FaceImg\\\":\\\"\\\",\\\"FaceIndex\\\":\\\"-1\\\",\\\"Actor_X\\\":\\\"0\\\",\\\"Actor_Y\\\":\\\"0\\\",\\\"Img_SX\\\":\\\"90\\\",\\\"Img_SY\\\":\\\"-10\\\",\\\"Actor_Scale\\\":\\\"100\\\",\\\"ActorBackImg\\\":\\\"\\\",\\\"ActorFrontImg\\\":\\\"\\\"}\",\"{\\\"actorId\\\":\\\"5\\\",\\\"GraphicMode\\\":\\\"'img'\\\",\\\"ActorImg\\\":\\\"menu/kitty_1\\\",\\\"FaceImg\\\":\\\"\\\",\\\"FaceIndex\\\":\\\"-1\\\",\\\"Actor_X\\\":\\\"0\\\",\\\"Actor_Y\\\":\\\"0\\\",\\\"Img_SX\\\":\\\"90\\\",\\\"Img_SY\\\":\\\"0\\\",\\\"Actor_Scale\\\":\\\"100\\\",\\\"ActorBackImg\\\":\\\"\\\",\\\"ActorFrontImg\\\":\\\"\\\"}\"]","ActorPictureData":"[]","ActorPictureEXApp":"true","ActorImg_X":"0","ActorImg_Y":"0"}},
{"name":"DarkPlasma_AutoLineBreak","status":true,"description":"ウィンドウ幅を超える日本語文章を自動で折り返す","parameters":{"prohibitLineBreakBefore":",)]｝、〕〉》」』】〙〗〟’”｠»ゝゞーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇷ゚ㇺㇻㇼㇽㇾㇿ々〻‐゠–〜～?!‼⁇⁈⁉・:;/。.","prohibitLineBreakAfter":"([｛〔〈《「『【〘〖〝‘“｟«","ignoreAutoLineBreakWindows":"[]","lineWidthMargin":"4"}},
{"name":"GameInactiveNotStop","status":true,"description":"ゲームウィンドウが非アクティブでもゲームを止めない。","parameters":{}},
{"name":"CGMZ_Core","status":true,"description":"Core CGMZ Plugin, should be placed above all other CGMZ Plugins.","parameters":{"Check for Updates":"false","Dev Tools on Start":"false","Show FPS Counter":"false","Fullscreen":"false","Simulate Production Env":"false"}},
{"name":"CGMZ_TitleCommandWindow","status":true,"description":"Manage the menu command window","parameters":{"Visible Commands":"3","Alignment":"center","Keep Original Commands":"false","Enable Text Codes":"true","Commands":"[\"{\\\"Command Name\\\":\\\"館内から\\\",\\\"Command Symbol\\\":\\\"continue\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\"}\",\"{\\\"Command Name\\\":\\\"入口から\\\",\\\"Command Symbol\\\":\\\"newGame\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\"}\",\"{\\\"Command Name\\\":\\\"オプション\\\",\\\"Command Symbol\\\":\\\"options\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\"}\"]"}},
{"name":"CGMZ_GameInfo","status":true,"description":"Adds text fields to the title screen for copyright/website/etc.","parameters":{"Text Options":"","Font Size":"12","Font Outline Width":"2","Font Outline Color":"black","Left Text":"","Center Text":"","Right Text":"","Buttons":"[\"{\\\"Image\\\":\\\"webpageLogo\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"50\\\",\\\"height\\\":\\\"50\\\",\\\"URL\\\":\\\"https://daidai7742.wixsite.com/aqua-dance\\\"}\",\"{\\\"Image\\\":\\\"twitterLogo\\\",\\\"x\\\":\\\"128\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"50\\\",\\\"height\\\":\\\"50\\\",\\\"URL\\\":\\\"https://twitter.com/aqua_dance_\\\"}\"]"}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-200","Offset Y":"200","Width":"240","Background":"0"}},
{"name":"RegionBase","status":true,"description":"リージョンのデータベース提供します","parameters":{"regionList":"[]","terrainTagList":"[8]","id":"8","name":"","collisionForPlayer":"[]","collisionForEvent":"[]","through":"false","tileAttribute":"[]","commonEvent":"","switchId":"","traitsId":"","note":"","trigger":"1"}},
{"name":"SepTrigger","status":true,"description":"ver1.01 プレイヤーがイベントに接触した時の制御。","parameters":{"require":"118","require2":"1"}},
{"name":"MKR_PlayerMoveForbid","status":false,"description":"(v1.0.5) プレイヤー移動プラグイン禁止","parameters":{"Default_Move_Flag":"125","Default_Menu_Flag":"true","エンターフラグ":"true"}},
{"name":"PlayerGraphicChange","status":false,"description":"プレイヤーの画像変更プラグイン","parameters":{}},
{"name":"CharacterFreeze","status":true,"description":"キャラクター停止プラグイン","parameters":{"停止スイッチID":"225","停止中ピクチャID":"0","停止中ピクチャ名":"","停止中BGM音量":"100"}},
{"name":"EasyLongMessage","status":false,"description":"簡易長文表示プラグイン","parameters":{"ELMswitchId":"175","ELMVersion":"true"}},
{"name":"PluginCommonBase","status":true,"description":"パラメータ解析を提供する共通基盤です","parameters":{}},
{"name":"EventCommandByCode","status":true,"description":"コードとパラメータを指定してイベントコマンドを実行します。","parameters":{}},
{"name":"DisableFastForward","status":false,"description":"イベント高速化禁止プラグイン","parameters":{}},
{"name":"NRP_EventFastForward","status":true,"description":"v1.01 イベント高速化機能を拡張します。","parameters":{"FastKey":"ok","SpeedMultiply":"1","SpeedVariableId":"","PressWait":"24","FastSprite":"false","<Touch>":"","TouchSpeedMultiply":"","TouchSpeedVariableId":"","TouchPressWait":""}},
{"name":"NRP_EventNearScreen","status":true,"description":"v1.01 画面外イベントの自律移動を許可","parameters":{"AlwaysSelfMovement":"true"}},
{"name":"StartUpFullScreen","status":false,"description":"フルスクリーンで起動プラグイン","parameters":{"Shutdown":"シャットダウン","DefaultFullScreen":"false","Immediate":"false","StartUpFullScreen":"フルスクリーンで起動","UseGameEnd":"true"}},
{"name":"KNS_MessageExport","status":false,"description":"[ver.1.0.1(2022/3/23)]イベントとデータベース内のテキストをエクスポートします。","parameters":{}},
{"name":"SentenceDataExtractor","status":false,"description":"ゲーム起動時にゲーム中の全メッセージをテキストファイルに書き出す","parameters":{}},
{"name":"DRS_AllDataExtractor","status":false,"description":"ゲームのテキストデータをすべて抽出します。","parameters":{"saveActors":"true","saveArmors":"true","saveClasses":"true","saveCommonEvents":"true","saveEnemies":"true","saveItems":"true","saveMaps":"true","saveSkills":"true","saveStates":"true","saveSystem":"true","saveTroops":"true","saveWeapons":"true"}},
{"name":"NRP_ChangeCharacterSpeed","status":true,"description":"NRP_ChangeCharacterSpeed","parameters":{"PlayerSpeed":"4","PlayerBasicSpeedRate":"400"}}
];
