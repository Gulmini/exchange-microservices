// Original file: proto/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _usersPackage_LoginRequest, LoginRequest__Output as _usersPackage_LoginRequest__Output } from '../usersPackage/LoginRequest';
import type { LoginResponse as _usersPackage_LoginResponse, LoginResponse__Output as _usersPackage_LoginResponse__Output } from '../usersPackage/LoginResponse';
import type { SignupRequest as _usersPackage_SignupRequest, SignupRequest__Output as _usersPackage_SignupRequest__Output } from '../usersPackage/SignupRequest';
import type { SignupResponse as _usersPackage_SignupResponse, SignupResponse__Output as _usersPackage_SignupResponse__Output } from '../usersPackage/SignupResponse';

export interface UsersClient extends grpc.Client {
  Login(argument: _usersPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usersPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usersPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usersPackage_LoginRequest, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usersPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usersPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usersPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usersPackage_LoginRequest, callback: grpc.requestCallback<_usersPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Signup(argument: _usersPackage_SignupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  Signup(argument: _usersPackage_SignupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  Signup(argument: _usersPackage_SignupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  Signup(argument: _usersPackage_SignupRequest, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  signup(argument: _usersPackage_SignupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  signup(argument: _usersPackage_SignupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  signup(argument: _usersPackage_SignupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  signup(argument: _usersPackage_SignupRequest, callback: grpc.requestCallback<_usersPackage_SignupResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_usersPackage_LoginRequest__Output, _usersPackage_LoginResponse>;
  
  Signup: grpc.handleUnaryCall<_usersPackage_SignupRequest__Output, _usersPackage_SignupResponse>;
  
}

export interface UsersDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_usersPackage_LoginRequest, _usersPackage_LoginResponse, _usersPackage_LoginRequest__Output, _usersPackage_LoginResponse__Output>
  Signup: MethodDefinition<_usersPackage_SignupRequest, _usersPackage_SignupResponse, _usersPackage_SignupRequest__Output, _usersPackage_SignupResponse__Output>
}