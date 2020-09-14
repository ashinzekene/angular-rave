# Changelog

All notable changes to `angular-rave` will be documented here

### Changes
- `forRoot` configuration no longer accepts an object. Now accepts only the public key
- `PUBKey` now `public_key`
- Implemented updated `flutterwave's` inline script.
- `Customization` and `customer` object 

### Removed
- Removed the `autoClose` option

### Fixed
- No reload on successful transaction
- Callback is now being called after a successful transaction

## 2.0.0 - 2019-10-19
### Added
- Module `forRoot` configuration
- Added the `raveOptions` input
- Intelliscence support for rave options
- `autoClose` modal

## 1.2.1 - 2019-01-03
- close rave modal automatically after successful payment

## 1.2.0 - 2018-12-12
- added (init) event to be called when payment is about to begin
- rave's script is not loaded automatically

## 1.0.2 - 2018-04-17
- fixed bug where txref is not passed to rave

## 1.0.1 - 2018-02-26
- small bug fixes

## 0.2.1 - 2018-02-24
- Changed rave script in example and on readme

## 0.2.1 - 2018-02-24
- Changed ts error on readme

## 0.2.0 - 2018-02-24
- Added angular rave directive
- Added reaveOptions input

## 0.1.1 - 2017-09-20
- Fixed minor

## 0.1.0 - 2017-09-17
- Initial release
