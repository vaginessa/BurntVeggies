App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {

  this.resource('account', function() {
    this.resource('account.settings', { path: '/settings' }, function() {
      this.route('appearance');
      this.route('notifications');
      this.route('identities');
    });
  });

  this.resource('team', function() {
    this.resource('team.project', { path: '/project' }, function() {
      this.route('group');
      this.route('explore');
      this.route('settings');
    });

    this.resource('team.settings', { path: '/settings' }, function() {
      this.route('projects');
      this.route('members');
      this.route('access-groups');
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('team.project');
  }
});
