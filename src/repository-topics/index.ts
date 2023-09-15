/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryTopicsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics#id RepositoryTopics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the repository. The name is not case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics#repository RepositoryTopics#repository}
  */
  readonly repository: string;
  /**
  * An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository. Note: Topic names cannot contain uppercase letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics#topics RepositoryTopics#topics}
  */
  readonly topics: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics github_repository_topics}
*/
export class RepositoryTopics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_topics";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/repository_topics github_repository_topics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryTopicsConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryTopicsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_topics',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.36.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._repository = config.repository;
    this._topics = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
    };
  }
}