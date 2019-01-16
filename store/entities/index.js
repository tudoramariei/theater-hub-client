export var ProfileSectionType = {
  'GeneralInformation': 0,
  'Skills': 1,
  'PhotoGallery': 2,
  'VideoGallery': 3,
  'Awards': 4,
  'Experience': 5,
  'Education': 6
}

export var SocialMediaCategoryType = {
  'Instagram': 0,
  'Youtube': 1,
  'Facebook': 2,
  'Linkedin': 3,
  'Vimeo': 4
}

export var VisibilityType = {
  'Everyone': 0,
  'Community': 1,
  'Private': 2
}

export var UserAccountStatusType = {
  'Registered': 0,
  'Confirmed': 1,
  'Enabled': 2,
  'Disabled': 3,
  'Deleted': 4
}

export class Wish {
  constructor (title, description) {
    this.title = title
    this.description = description
  }
}

export class EducationStep {
  constructor (name, title, startDate, endDate) {
    this.name = name
    this.title = title
    this.startDate = startDate
    this.endDate = endDate
  }
}

export class UpdateProfileSection {
  constructor (addedEntities, removedEntities, updatedEntities) {
    this.AddedEntities   = addedEntities;
    this.RemovedEntities = removedEntities;
    this.UpdatedEntities = updatedEntities;
  }
}
