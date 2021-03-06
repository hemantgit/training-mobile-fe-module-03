//
//  CXP+Core.h
//  BackbaseCXP
//
//  Created by Backbase R&D B.V. on 30/04/15.
//

#import <BackbaseCXP/BackbaseCXP.h>
#import <Foundation/Foundation.h>

/**
 * Entry point for the CXP library.
 * This class provides convenient methods to save some boiler-plate code, and also to provide access to otherwise
 * private or protected APIs
 */
@interface CXP : NSObject

#pragma mark - Initialization

/**
 * Initializes the CXP internal states and prepare the proper functioning of subsequent methods.
 * @param configurationPath The file path containing the configuration information.
 * @param error If an error occurs, upon return contains an NSError object that describes the problem.
 * @return Yes if the objects could be initialized properly. No otherwise.
 * @discussion By default the configuration file could be encrypted or not. This method will attempt to decrypt the file
 * and it will fall back to read as plain if the decryption failed. To override this behavior use the
 * initialize:forceDecryption:error: instead
 */
+ (BOOL)initialize:(NSString*)configurationPath error:(NSError**)error;

/**
 * Initializes the CXP internal states and prepare the proper functioning of subsequent methods.
 * @param configurationPath The file path containing the configuration information.
 * @param forceDecryption Switch off/on the force decryption. When forceDecryption is NO, it will attempt to read as
 * plain JSON as fallback
 * @param error If an error occurs, upon return contains an NSError object that describes the problem.
 * @return Yes if the objects could be initialized properly. No otherwise.
 */
+ (BOOL)initialize:(NSString*)configurationPath forceDecryption:(BOOL)forceDecryption error:(NSError**)error;

/**
 * Initializes the CXP internal states and prepare the proper functioning of subsequent methods.
 * @discussion The configuration URL could be an internal or external URL. In either case, the SDK will retreive the
 * content of the configuration URL synchronously.
 * By default the configuration file could be encrypted or not. This method will attempt to decrypt the file
 * and it will fall back to read as plain if the decryption failed. To override this behavior use the
 * initializeFromURL:forceDecryption:error: instead
 * @param configurationURL The file path containing the configuration information.
 * @param error If an error occurs, upon return contains an NSError object that describes the problem.
 * @return Yes if the objects could be initialized properly. No otherwise.
 */
+ (BOOL)initializeFromURL:(NSURL*)configurationURL error:(NSError**)error;

/**
 * Initializes the CXP internal states and prepare the proper functioning of subsequent methods.
 * @discussion The configuration URL could be an internal or external URL. In either case, the SDK will retreive the
 * content of the configuration URL synchronously.
 * @param configurationURL The file path containing the configuration information.
 * @param forceDecryption Switch off/on the force decryption. When forceDecryption is NO, it will attempt to read as
 * plain JSON as fallback
 * @param error If an error occurs, upon return contains an NSError object that describes the problem.
 * @return Yes if the objects could be initialized properly. No otherwise.
 */
+ (BOOL)initializeFromURL:(NSURL*)configurationURL forceDecryption:(BOOL)forceDecryption error:(NSError**)error;

/**
 * Retrieves the configuration object.
 * If this method is called before the initialize method, an exception will be raised.
 * @return A configuration object
 */
+ (CXPConfiguration*)configuration;

/**
 * Rertrieves the current SDK version.
 * @return A string with the version number.
 */
+ (NSString*)version;

@end
