'use strict';

angular.module('ne', [

  'ngMessages',
  'ngAnimate',
  'ngWebSocket',
  'textAngular',
  'angularMoment',
  'matchMedia',
  'headroom',
  'tr.webUI',
  'socialLinks',
  'infinite-scroll',

  'ne.templates',
  'ne.components.AutoCompleteModule',
  'ne.components.ClaimingOrcidModule',
  'ne.components.CommentModule',
  'ne.components.CreatePostModule',
  'ne.components.DataAugmentationModule',
  'ne.components.EnvironmentModule',
  'ne.components.ExperimentationModule',
  'ne.components.ImageDetectionModule',
  'ne.components.NavigationModule',
  'ne.components.NotificationModule',
  'ne.components.PostsModule',
  'ne.components.RecommendModule',
  'ne.components.SearchBarModule',
  'ne.components.SearchResultsModule',
  'ne.components.SendToEnModule',
  'ne.components.SocialShareModule',
  'ne.components.SearchResultsTypeModule',
  'ne.components.TrendingModule',
  'ne.components.UserDetailsModule',
  'ne.components.UserModule',
  'ne.components.UserProfileFieldModule',
  'ne.components.UserFollowUnfollowModule',
  'ne.components.UserProfileImageModule',
  'ne.components.UserProfileInstitutionModule',
  'ne.components.UserProfileLocationModule',
  'ne.components.UserProfileObjectModule',
  'ne.components.UserProfileTopicsModule',
  'ne.components.UserRelationshipModule',
  'ne.components.WatchToggleModule',

  'ne.views.AccountModule',
  'ne.views.BridgeModule',
  'ne.views.HomeModule',
  'ne.views.LoginModule',
  'ne.views.ProfileModule',
  'ne.views.PublicationModule',
  'ne.views.SearchModule',
  'ne.views.StaticModule',
  'ne.views.WatchListModule',
  'ne.views.PostModule',

  'wui.components.AnalyticsModule',
  'wui.components.AuthenticationModule',
  'wui.components.PubSubModule'
]);
