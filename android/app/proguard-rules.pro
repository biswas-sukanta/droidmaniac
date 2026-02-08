# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# CRITICAL: Disable Kotlin metadata rewriting to avoid R8 compatibility errors
# The @capacitor-community/admob plugin uses Kotlin compiled with a newer version
# than R8 8.7.18 (bundled with AGP 8.7.2) can handle
-dontwarn kotlin.Metadata
-dontwarn kotlinx.**
-keep class kotlin.Metadata { *; }
-keep class kotlin.** { *; }

# Keep all Kotlin metadata annotations
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes InnerClasses
-keepattributes EnclosingMethod

# Keep AdMob and Capacitor classes from obfuscation
-keep class com.getcapacitor.community.admob.** { *; }
-keep class com.google.android.gms.ads.** { *; }
-keep class com.getcapacitor.** { *; }
-keep interface com.getcapacitor.** { *; }

# Keep all plugin classes
-keep class * extends com.getcapacitor.Plugin { *; }

# Preserve line numbers for debugging
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Google Play Services
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**
